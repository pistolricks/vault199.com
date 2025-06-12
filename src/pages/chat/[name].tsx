import {createEffect, createSignal, For, JSXElement, onMount, useContext,} from 'solid-js';
import Navbar from '~/components/chat/Navbar';
import {WebsocketContext} from '~/context/WebsocketContextProvider';
import {useLocation, useNavigate} from '@solidjs/router';
import ChatMessage from '~/components/chat/ChatMessage';
import FetchUsersInRoom from '~/utils/FetchUsersInRoom';
import {CredentialError} from '~/utils/CredentialValidator';
import {AuthContext} from '~/context/AuthContextProvider';

export type Message = {
    content: string;
    roomId: string;
    username: string;
    type: 'self' | 'other' | 'notification';
};

export type ChatUser = {
    username: string;
};

export default function Chat(): JSXElement {
    const [username, setUsername] = createSignal<string>('');
    const [messages, setMessages] = createSignal<Message[]>([]);
    const [users, setUsers] = createSignal<ChatUser[]>([]);
    const navigate = useNavigate();
    const locationState = useLocation().state as ChatUser;
    let inputRef: HTMLInputElement;
    const { conn } = useContext(WebsocketContext);
    const { storage } = useContext(AuthContext);

    onMount(() => {
        if (locationState?.username?.length > 0) {
            setUsername(locationState.username);
        }
    });

    createEffect(() => {
        if (storage().getItem('authentication') == null) {
            navigate('/login', { replace: true });
            return;
        }
        if (conn() == null) {
            navigate('/');
            return;
        }

        const roomId: string = conn().url.split('/')[5].split('?')[0];
        FetchUsersInRoom(roomId).then((data) => {
            if (
                data === CredentialError.catchAllError ||
                data === CredentialError.unauthenticatedError
            ) {
                navigate('/login', { replace: true, state: { err: data } });
            } else {
                setUsers(data);
            }
        });

        conn().onopen = () => {};
        conn().onmessage = (msg) => {
            const m: Message = JSON.parse(msg.data);
            if (m.content.includes('has joined the room')) {
                m.type = 'notification';
                setUsers((users) => [...users, { username: m.username }]);
            } else if (m.content.includes('has left the chat room')) {
                m.type = 'notification';
                const removeUser = users().filter(
                    (user) => user.username != m.username
                );
                setUsers([...removeUser]);
            } else {
                username() === m.username ? (m.type = 'self') : (m.type = 'other');
            }
            setMessages((messages) => [...messages, m]);
        };
        conn().onerror = () => {};
        conn().onclose = () => {};
    });

    const sendMessageClickHandler = () => {
        if (conn() === null) {
            navigate('/');
            return;
        }
        if (inputRef.value.length > 0) {
            conn().send(inputRef.value);
        }
    };

    return (
        <div>
            <Navbar />
            <div class='flex flex-row h-screen w-full'>
                <div class=' flex flex-col border-2 border-indigo-400 bg-white'>
                    <div class='basis-20 px-4 py-4 border-indigo-200 border-b-2 justify-center font-semibold text-xl whitespace-nowrap dark:text-white'>
                        Users present
                    </div>
                    <For each={users()}>
                        {(user, index) => (
                            <div class='basis-1/12 text-l px-4 py-4'>{user.username}</div>
                        )}
                    </For>
                </div>
                <div class='basis-3/4 flex flex-col'>
                    <div class='basis-10/12 flex flex-col overflow-y-scroll'>
                        <ChatMessage messages={messages()} />
                    </div>
                    <div class='basis-2/12 items-center gap-x-6 flex flex-row py-4 px-4 border-y-2 border-indigo-400 bg-white'>
                        <input
                            type='text'
                            ref={inputRef}
                            placeholder='Write your message!'
                            class='basis-3/4 h-3/4 focus:outline-none focus:placeholder-gray-400 p-2 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md'
                        ></input>
                        <button
                            class='basis-1/4 h-3/4 border items-center content-center bg-indigo-700 text-white rounded-md'
                            onclick={sendMessageClickHandler}
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
