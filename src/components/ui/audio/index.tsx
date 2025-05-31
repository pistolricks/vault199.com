import {Component, createMemo, createSignal, For} from "solid-js";
import AudioPlayer from 'solid-audio-player'
import {createListCollection} from "@ark-ui/solid";
import track1 from "~/static/sounds/radio/songs/A Kiss to Build a Dream On - Louis Armstrong.mp3"
import track2 from "~/static/sounds/radio/songs/A Wonderful Guy - Diamond City Radio - Fallout 4.mp3"
import track3 from "~/static/sounds/radio/songs/Accentuate the Positive - Bing Crosby - Fallout 4.mp3"
import track4 from "~/static/sounds/radio/songs/Ain't That A Kick In The Head.mp3"
import track5 from "~/static/sounds/radio/songs/Anything Goes - Diamond City Radio - Fallout 4.mp3"
import track6 from "~/static/sounds/radio/songs/Atom Bomb Baby - Diamond City Radio - Fallout 4.mp3"
import track7 from "~/static/sounds/radio/songs/Big Iron - Marty Robbins.mp3"
import track8 from "~/static/sounds/radio/songs/Butcher Pete - Roy Brown.mp3"
import track9 from "~/static/sounds/radio/songs/Civilization - Fallout 3.mp3"
import track10 from "~/static/sounds/radio/songs/Crazy He Calls Me - Billie Holiday - Fallout 3.mp3"
import track11 from "~/static/sounds/radio/songs/Rocket 69 - Connie Allen .mp3"
import track12 from "~/static/sounds/radio/songs/Take Me Home, Country Roads - Fallout 76.mp3"
import track13 from "~/static/sounds/radio/songs/The End of the World - Skeeter Davis - Fallout 4.mp3"
import track14 from "~/static/sounds/radio/songs/The Wanderer - Dion And Belmonts.mp3"
import track15 from "~/static/sounds/radio/songs/Uranium Fever - Fallout 4.mp3"


import mute from "~/static/sounds/icons/mute.png"
import muteActive from "~/static/sounds/icons/mute_active.png"
import play from "~/static/sounds/icons/play_button.png"
import previous from "~/static/sounds/icons/previous_song.png"
import next from "~/static/sounds/icons/next_song.png"
import pause from "~/static/sounds/icons/pause_button.png"

type PROPS = {}

const customIcons = {
    play: play,
    pause: pause,
    previous: previous,
    next: next,
    volume: mute,
    volumeMute: muteActive
}

const FalloutAudioPlayer: Component<PROPS> = props => {

    let ref!: HTMLAudioElement;


    const collection = createListCollection({
        items: [
            {label: 'Take Me Home, Country Roads', value: track12},
            {label: 'The End of the World', value: track13},
            {label: 'The Wanderer', value: track14},
            {label: 'Uranium Fever', value: track15},
            {label: 'A Kiss to Build a Dream On', value: track1},
            {label: 'A Wonderful Guy', value: track2},
            {label: 'Accentuate the Positive', value: track3},
            {label: "Ain't That A Kick in the head", value: track4},
            {label: 'Anything Goes', value: track5},
            {label: 'Atom Bomb Baby', value: track6},
            {label: 'Big Iron', value: track7},
            {label: 'Butcher Pete', value: track8},
            {label: 'Civilization', value: track9},
            {label: 'Crazy He Calls Me', value: track10},
            {label: 'Rocket 69', value: track11},
        ],
    })

    const [getTrack, setTrack] = createSignal(collection.items[0].value)

    const handleNewTrack = (e: { label: string, value: string }) => {
        console.log("new track", e)
        setTrack(() => e.value)
    }

    const handlePrev = () => {
        setTrack(() => collection.getPreviousValue(track()))
    }


    const handleNext = () => {
        setTrack(collection.getNextValue(track()))
    }

    const track = createMemo(() => getTrack())

    return (
        <div style={{
            "--sap_theme-color": '#ffd52c',
            "--sap_background-color": 'rgba(var(--main), 0.25)',
            "--sap_bar-color": '#00dd00',
            "--sap_time-color": '#ffd52c',
            "--sap_font-family": 'inherit',
        }}>


            <AudioPlayer
                ref={ref}
                className={"rounded-lg"}
                showSkipControls
                showJumpControls={false}
                customAdditionalControls={[]}

                src={track()}
                onEnded={handleNext}
                onPlay={e => console.log('onPlay')}
                onClickNext={handleNext}
                onClickPrevious={handlePrev}
                layout={"horizontal-reverse"}
            />
            <div class="pip-body mt-12 sm:mt-4">
                <ul class="options h-[40dvh] overflow-y-auto">
                    <For each={collection.items}>
                        {(item, i) => (

                            <li>
                                <input
                                    type="radio"
                                    id={`audio-${i()}`}
                                    name="audio-tape"
                                    value={item.value}
                                    onClick={() => handleNewTrack(item)}
                                    checked={track() === item.value}
                                />

                                <label for={`audio-${i()}`} class={" w-full"}>{item.label}</label>

                            </li>

                        )}
                    </For>

                </ul>
            </div>
        </div>
    );
};

export default FalloutAudioPlayer;