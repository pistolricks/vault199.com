import {Component, createEffect, createMemo, createSignal, onCleanup, onMount, Show} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import styles from "~/components/layouts/terminal/style.module.css"
import {currentUser} from "~/app";
import {TypingAnimationComponent} from "~/components/ui/text/typing-animation";

import {ProgressComponent} from "~/components/ui/progress";
import {classNames} from "~/components/navigation";
import AnimatedBeamComponent from "~/components/ui/animated-beam";
import AiCompanion from "~/components/ai-companion";


const Home: Component<RouteSectionProps> = (props) => {


    const [getValue, setValue] = createSignal(0);
    const [getShow, setShow] = createSignal(false);
    const [getShowUpdate, setShowUpdate] = createSignal(false);
    const [getOpen, setOpen] = createSignal(false);

    let timeoutId: number | undefined;
    let timeoutIdUpdate: number | undefined;

    onMount(() => {
        timeoutId = setTimeout(() => {
            setShow((p) => !p)
        }, 3000);

        timeoutIdUpdate = setTimeout(() => {
            setShowUpdate((p) => !p)
        }, 6000);
    });

    onCleanup(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (timeoutIdUpdate) {
            clearTimeout(timeoutIdUpdate)
        }
    });


    createEffect(() => {
        console.log(getValue())
    })


    return (
        <TerminalLayout {...props} >

            <Show
                fallback={
                    <></>
                }
                when={currentUser()?.token()}>
                <div class={"w-full flex justify-center items-center text-center"}>
                    <div class={"flex flex-col text-balance text-center w-full"}>
                        <div class={"flex justify-center items-center"}>
                            <Show when={getValue() < 100}>
                                <TypingAnimationComponent text={"Welcome back,"} duration={50}/>
                            </Show>
                            <div class={"w-2"}/>
                            <TypingAnimationComponent text={` ${currentUser()?.username()}`} duration={100}/>
                        </div>

                        <Show when={getShow()}>
                            <Show when={getValue() < 100}>
                                <TypingAnimationComponent text={`Please update your Pipboy to the latest version.`}
                                                          class={"text-normal text-base"} duration={50}/>
                            </Show>
                        </Show>
                        <div class={"h-10"}></div>
                        <Show when={getShowUpdate()}>
                            <button
                                style={{
                                    'backdrop-filter': `brightness(${getValue()})`,
                                    'opacity': getValue() === 100 ? "0" : "1",

                                }}
                                class={classNames(
                                    styles.button,
                                    "max-w-1/2 left-1/2 -translate-x-1/2",
                                    "animate-in fade-in duration-200 slide-in-from-bottom",
                                )} onClick={() => setOpen(true)}>
                                <Show
                                    fallback={
                                        <Show when={getValue() < 100}>
                                            <div class={"animate-out slide-out-to-bottom"}>
                                                <ProgressComponent setValue={setValue} start={getOpen()}/>
                                            </div>
                                        </Show>
                                    }
                                    when={!getOpen()}>
                                    UPDATE
                                </Show>
                            </button>
                            <Show when={getValue() === 100}>
                                <div class={"flex justify-center items-center"}>
                                    <AnimatedBeamComponent/>
                                </div>
                            </Show>
                        </Show>
                    </div>
                </div>
            </Show>


            <AiCompanion name={"mrshandy"}/>
            <p class="clear"><br/></p>


        </TerminalLayout>


    );
}

export default Home;