import {Component, createEffect, createMemo, createSignal, For, onCleanup, onMount, Show} from 'solid-js';
import styles from "~/components/layouts/terminal/style.module.css"
import {classNames} from "~/components/navigation";
import chatBox from "~/static/pipboy/chatbox/chatbox_001.png"
import cover from "~/static/pipboy/2000N/app_cover.png";
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import BottomPipboyMenu, {MenuItem} from "~/components/bottom-pipboy-menu";
import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png";
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png";
import left from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import pleaseStandBy from "~/static/gifs/please_stand_by.gif";
import {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";
import {Contact} from "~/components/lists/contact-list";
interface ChatItem {
    id: string;
    type: 'text' | 'audioLink' | 'audioPlayer';
    content: string;
    name?: string; // For chat messages
    audioUrl?: string; // For audio player
    isMe?: boolean;
}

const AiCompanion: Component<{
    data?: ActivatedLayoutRouteData

}> = (props) => {
    let outputDivRef: HTMLDivElement | undefined;
    let chatHistoryRef: HTMLDivElement | undefined;
    let videoRef: HTMLVideoElement | undefined;
    let audioPlayerRef: HTMLAudioElement | undefined; // For playing received audio chunks

    const [companion, setCompanion] = createSignal<Contact | null>(props.data?.companion);

    createEffect(() => {
        setCompanion(props.data?.companion);
        console.log(props.data?.companion, "c", companion())
    })

    const name = () => companion()?.title ?? "clover";
    const avatar = () => companion()?.avatar;



    const [outputText, setOutputText] = createSignal<string[]>([]);
    const [chatHistory, setChatHistory] = createSignal<ChatItem[]>([]);

    let ws: WebSocket | null = null;
    const [isRecording, setIsRecording] = createSignal(false);
    let audioChunksReceived: Uint8Array[] = [];
    let audioChunksSent: Uint8Array[] = [];

    let processor: ScriptProcessorNode | null = null;
    // let inputTimer: number | undefined; // Not directly used in the provided snippet's logic for conversion
    let shareScreenTimer: number | undefined;
    let videoTimer: number | null = null;

    const sampleRate = 24000;

    const audioQueue: Uint8Array[] = [];
    let isAudioPlaying = false;


    const printToOutput = (message: string) => {
        setOutputText(prev => [...prev, message]);
        if (outputDivRef) {
            outputDivRef.scrollTop = outputDivRef.scrollHeight;
        }
    };

    const addChatItem = (item: Omit<ChatItem, 'id'>) => {
        setChatHistory(prev => [...prev, {...item, id: Date.now().toString() + Math.random().toString()}]);
        if (chatHistoryRef) {
            chatHistoryRef.scrollTop = chatHistoryRef.scrollHeight;
        }
    };

    const printChatText = (message: string, name: string) => {
        addChatItem({type: 'text', content: message, name, isMe: name === 'Me'});
    };

    const encodeAudio = (audioChunks: Uint8Array[], currentSampleRate: number, bitDepth: number, numChannels: number): Blob => {
        const audioData = mergeUint8Array(audioChunks);
        const dataSize = audioData.length;
        const fileSize = dataSize + 36; // 44 - 8 (RIFF chunk descriptors)
        const blockAlign = numChannels * bitDepth / 8;
        const byteRate = currentSampleRate * blockAlign;

        const buffer = new ArrayBuffer(44);
        const view = new DataView(buffer);

        const writeString = (offset: number, string: string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, fileSize, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true); // PCM
        view.setUint16(20, 1, true); // AudioFormat (PCM = 1)
        view.setUint16(22, numChannels, true);
        view.setUint32(24, currentSampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitDepth, true);
        writeString(36, 'data');
        view.setUint32(40, dataSize, true);

        return new Blob([buffer, audioData], {type: 'audio/wav'});
    };

    const printChatAudio = (audioBlob: Blob, messageName: string) => {
        const audioUrl = URL.createObjectURL(audioBlob);
        addChatItem({
            type: 'audioPlayer',
            content: messageName, // Used as a label or title
            name: messageName,
            audioUrl: audioUrl,
            isMe: messageName === 'Me'
        });
    };

    const createContent = (msg: string) => JSON.stringify({
        clientContent: {
            turnComplete: true,
            turns: [{parts: [{text: msg}]}]
        }
    });

    const createImageContent = (msg: string) => JSON.stringify({media: {data: msg, mimeType: 'image/jpeg'}}); // Assuming jpeg, adjust if other types are used
    const createAudioContent = (msg: string) => JSON.stringify({media: {data: msg, mimeType: 'audio/pcm'}});

    const mergeUint8Array = (arrays: Uint8Array[]): Uint8Array => {
        const totalSize = arrays.reduce((acc, e) => acc + e.length, 0);
        const merged = new Uint8Array(totalSize);
        let offset = 0;
        arrays.forEach(array => {
            merged.set(array, offset);
            offset += array.length;
        });
        return merged;
    };

    const b64ToUint8Array = (b64Data: string): Uint8Array => {
        const byteCharacters = atob(b64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        return new Uint8Array(byteNumbers);
    };

    const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };

    const convertFloat32ToInt16 = (float32Array: Float32Array): Int16Array => {
        const int16Array = new Int16Array(float32Array.length);
        for (let i = 0; i < float32Array.length; i++) {
            int16Array[i] = Math.max(-32768, Math.min(32767, float32Array[i] * 32768));
        }
        return int16Array;
    };

    const playNextChunk = () => {
        if (!isAudioPlaying && audioQueue.length > 0 && audioPlayerRef) {
            isAudioPlaying = true;
            // IMPORTANT: The original encodeAudio took sampleRate, etc. Make sure these are correct for playback.
            // The original code used audioChunksReceived for this, which might be different from the general audioQueue
            const currentAudioDataToPlay = [...audioQueue]; // Create a copy for this playback
            audioQueue.length = 0; // Clear the queue for next chunks

            const encodedAudio = encodeAudio(currentAudioDataToPlay, sampleRate, 16, 1);
            audioPlayerRef.src = URL.createObjectURL(encodedAudio);
            audioPlayerRef.onended = () => {
                isAudioPlaying = false;
                URL.revokeObjectURL(audioPlayerRef!.src); // Clean up blob URL
                playNextChunk();
            };
            audioPlayerRef.play().catch(e => console.error("Error playing audio:", e));
        }
    };

    const wsUrl = (`${import.meta.env.VITE_API_WS}/api/v1/ai/${name()}`)


    // Placeholder, adjust as needed

    const openWs = () => {
        if (ws) return;
        ws = new WebSocket(wsUrl); // Original code used '{{.}}' which is a template placeholder

        ws.onopen = () => printToOutput('SIGNAL');
        ws.onclose = () => {
            printToOutput('NO SIGNAL');
            ws = null;
        };
        ws.onmessage = (evt) => {
            const data = JSON.parse(evt.data);
            if (!data.serverContent) return;

            if (data.serverContent.turnComplete) {
                if (audioChunksSent.length > 0) {
                    printChatAudio(encodeAudio(audioChunksSent, sampleRate, 16, 1), 'Me');
                    audioChunksSent = [];
                }
                // The original logic suggests Gemini 2.0 also sends chunks that are accumulated.
                // If data.serverContent.turnComplete implies all chunks for the turn are sent, then encode and play.
                if (audioChunksReceived.length > 0) {
                    printChatAudio(encodeAudio(audioChunksReceived, sampleRate, 16, 1), 'Gemini 2.0');
                    audioChunksReceived = [];
                }
                return;
            }

            if (!data.serverContent.modelTurn || !data.serverContent.modelTurn.parts || !data.serverContent.modelTurn.parts[0]) return;

            const part = data.serverContent.modelTurn.parts[0];
            if (part.inlineData) {
                const inlineData = part.inlineData;
                printToOutput(`RECEIVED: ${typeof (inlineData)} ${inlineData.mimeType} ${inlineData.data.substring(0, 30)}...`);
                if (inlineData.mimeType.startsWith('audio/pcm')) {
                    const audioData = b64ToUint8Array(inlineData.data);
                    audioQueue.push(audioData); // Add to general queue for sequential playback
                    audioChunksReceived.push(audioData); // Accumulate for "Gemini 2.0" message on turnComplete
                    playNextChunk();
                }
            } else if (part.text) {
                printChatText(part.text, "Gemini 2.0"); // Handle text messages from Gemini
            }
        };
        ws.onerror = (event) => printToOutput('ERROR: ' + JSON.stringify(event));
    };


    onMount(() => {
        openWs();
    });

    onCleanup(() => {
        if (ws) {
            ws.close();
        }
        if (processor) {
            processor.disconnect();
        }
        if (videoTimer != null) clearInterval(videoTimer);
        if (shareScreenTimer != null) clearInterval(shareScreenTimer);
        // Stop any media streams if active
        // stream?.getTracks().forEach(track => track.stop());
        // screenStream?.getTracks().forEach(track => track.stop());
    });

    const handleCloseConnection = () => {
        if (!ws) return;
        ws.close();
    };

    const recordStop = () => {
        if (processor) {
            processor.disconnect();
            processor = null; // Clear the processor
        }
        setIsRecording(false);
        // If there were any audio chunks sent but turn wasn't complete, handle them
        if (audioChunksSent.length > 0) {
            // Decide if you want to send a "final" chunk or encode what's there
            // For example, signaling turn complete to server if applicable
            // Or simply encoding and displaying locally like:
            // printChatAudio(encodeAudio(audioChunksSent, sampleRate, 16, 1), 'Me (incomplete)');
            // audioChunksSent = [];
        }
    };

    const recordAudio = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            const audioContext = new AudioContext({sampleRate: sampleRate});
            const source = audioContext.createMediaStreamSource(stream);
            processor = audioContext.createScriptProcessor(1024, 1, 1);

            processor.onaudioprocess = (e) => {
                if (!isRecording()) return; // Check recording state

                const inputData = e.inputBuffer.getChannelData(0);
                const pcmData16 = convertFloat32ToInt16(inputData);

                if (ws && ws.readyState === WebSocket.OPEN) {
                    audioChunksSent.push(new Uint8Array(pcmData16.buffer)); // Accumulate for local display on turn complete
                    const base64Data = arrayBufferToBase64(pcmData16.buffer);
                    ws.send(createAudioContent(base64Data));
                }
            };
            source.connect(processor);
            processor.connect(audioContext.destination); // Allows hearing audio if needed, remove if not.
        } catch (err) {
            console.error("Error starting audio recording:", err);
            // @ts-ignore
            printToOutput("Error starting audio recording: " + err.message);
            setIsRecording(false); // Reset recording state on error
        }
    };

    const recordStart = () => {
        recordAudio();
        setIsRecording(true);
    };

    const handleRecordToggle = () => {
        openWs();
        if (isRecording()) {
            recordStop();
            if (ws && ws.readyState === WebSocket.OPEN) {
                // Optionally send a message to server that recording/turn has ended
                // ws.send(createContent("Audio input finished by user."));
            }
        } else {
            audioChunksSent = []; // Clear previous chunks before starting new recording
            recordStart();
        }
    };


    const [getComm, setComm] = createSignal("")


    const menuItems: MenuItem[] = [
        {name: "right", icon: right},
        {name: "mail", icon: mail},
        {name: "contacts", icon: contacts},
        {name: "call", icon: call},
        {name: "left", icon: left},
    ]


    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
    }

    const communications = createMemo(() => getComm())




    return (
        <>
            <audio ref={audioPlayerRef} style={{display: 'none'}}/>
            {/* Hidden audio player for received chunks */}
            <div class={"flex flex-col gap-y-2"}>
                <div class={"flex justify-end gap-x-1"}>

                </div>

                <div class={" flex justify-center items-center h-full w-full mt-6"}>
                    <div class={classNames(
                        isRecording() ? '' : 'grayscale-100',
                        "p-4 overflow-x-hidden"
                    )} style={{
                        "background-image": `url(${isRecording() ? avatar() : pleaseStandBy})`,
                        "background-size": "cover",
                        "background-position": "center",
                        "background-repeat": "no-repeat",
                        width: '80%', height: '40dvh'
                    }}>
                        <div ref={outputDivRef}
                             class={"overflow-x-hidden scrollbar-hide"}
                             style={{
                                 'height': '100%',
                                 'overflow-y': 'scroll',
                                 'border': '1px solid #ccc',
                             }}>
                            <For each={outputText()}>
                                {(msg, i) => <div class="opacity-10">[{i()}] {msg}</div>}
                            </For>
                        </div>
                        <div ref={chatHistoryRef} class='absolute bottom-0 inset-x-0 audio-history hidden'
                             style={{'max-height': '15vh', 'overflow-y': 'scroll'}}>
                            <For each={chatHistory()}>
                                {(item) => (
                                    <div classList={{
                                        'vertical-container': true,
                                        'chat-message-container': true,
                                        'align-right': !!item.isMe
                                    }}>
                                        <div
                                            class="chat-message-name">{item.name || (item.isMe ? 'Me' : 'System')}</div>
                                        {item.type === 'text' && <div class="chat-message-text">{item.content}</div>}
                                        {item.type === 'audioLink' && (
                                            <a href={item.audioUrl}
                                               download={`${item.name || 'recording'}.wav`}>{item.content}</a>
                                        )}
                                        {item.type === 'audioPlayer' && item.audioUrl && (
                                            <div>
                                                <div>{item.content}</div>
                                                <audio src={item.audioUrl} controls/>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </For>
                        </div>
                    </div>

                </div>


                <img src={chatBox} class={"fixed inset-0 w-full h-[92dvh]"} alt={"chatbox"}/>
                <button
                    class={classNames(
                        "absolute z-50  rounded-full top-[69%] left-[6.3%] h-[2.2rem] w-[2.2rem]"
                    )}
                    type={"button"} onClick={handleRecordToggle}>
                    <Show
                        fallback={
                            <img src={call} class={classNames(
                                isRecording() ? "rotate-90" : "",
                                isRecording() ? "brightness-150" : "brightness-80",
                                "absolute z-50 rounded-full ring ring-gray-950 inset-0 h-[2.2rem] w-[2.2rem]"
                            )} alt={"call"}/>
                        }
                        when={isRecording()}>
                        <PhoneIcon class={classNames(
                            "rotate-90 p-1",
                            "bg-red-800",
                            "absolute z-50 rounded-full ring ring-gray-950 inset-0 h-[2.2rem] w-[2.2rem]"
                        )} />
                    </Show>

                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </button>
                <button
                    disabled={isRecording()}
                    class={classNames(
                        isRecording() ? "brightness-50 bg-gray-400/80" : "brightness-150 bg-red-700/80",
                    "absolute z-50 rounded-full top-[75.7%] left-[6.6%] h-[2.2rem] w-[2.2rem]")}
                    type={"button"} onClick={handleCloseConnection}>
                    <PowerButton/>

                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </button>


            </div>

            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>
        </>
    );
}
export default AiCompanion;


const PowerButton = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
                               class={classNames(
                                   "absolute z-50 rounded-full ring ring-gray-950 inset-0 h-[2.2rem] w-[2.2rem]"
                               )}
>
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
</svg>


const PhoneIcon: Component<{
    class?: string;
}> = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
                             class={props.class}
>
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>)

