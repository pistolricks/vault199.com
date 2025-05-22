import {Component, createEffect, createSignal, Match, onCleanup, Show, Switch} from "solid-js";
import UpdatingLayout from "~/components/layouts/updating/updating-layout";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {BaseNumberTicker} from "~/components/ui/number-ticker";
import ProgressBar from "~/components/ui/progress";


const PipBoyUpdating: Component<{ path?: string }> = props => {
    const navigate = useNavigate();

    const [getNumber, setNumber] = createSignal(43.3);

    const [count, setCount] = createSignal(0);
    const interval = setInterval(
        () => setCount(c => c + 1),
        1000
    );
    onCleanup(() => clearInterval(interval));

    const path = () => props.path ?? "/dashboard"

    createEffect(() => {

        console.log(count())

        if (count() > 15) {
            navigate(path())
        }
    })


    return (

            <div class={'flex justify-center items-center w-full h-full fixed inset-0 z-50'}>
                <div class={"flex flex-col justify-center items-center h-24"}>
                    <Switch>
                        <Match when={count() > 12}>
                            <div class={'flex justify-center items-center w-full h-full fixed inset-0 z-50'}>
                                <div class={"flex flex-col justify-center items-center h-24"}>
                                    <div class={"text-center text-5xl"}>RESTARTING</div>
                                </div>
                            </div>
                        </Match>
                        <Match when={count() > 10}>
                            <div class={"text-center"}>DOWNLOADING</div>
                            <BaseNumberTicker value={1000.0} decimalPlaces={0} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 9}>
                            <div class={"text-center"}>DOWNLOADING</div>
                            <BaseNumberTicker type={"spring"} value={999.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 8}>
                            <div class={"text-center"}>SIGNAL LOCKED</div>
                            <BaseNumberTicker type={"spring"} value={976.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 7}>
                            <div class={"text-center"}>SIGNAL LOCKED</div>
                            <BaseNumberTicker value={952.2} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>


                        <Match when={count() > 6}>
                            <div class={"text-center"}>TRIANGULATING</div>
                            <BaseNumberTicker type={"spring"} value={777.2} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 5}>
                            <div class={"text-center"}>TRIANGULATING</div>
                            <BaseNumberTicker type={"spring"} value={302.2} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 4}>
                            <div class={"text-center"}>LOCATING SIGNAL</div>
                            <BaseNumberTicker type={"spring"} value={273.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 2}>
                            <div class={"text-center"}>LOCATING SIGNAL</div>
                            <BaseNumberTicker type={"spring"} value={144.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 1}>
                            <div class={"text-center"}>LOCATING SIGNAL</div>
                            <BaseNumberTicker type={"spring"} value={111.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                        <Match when={count() > 0}>
                            <div class={"text-center"}>LOCATING SIGNAL</div>
                            <BaseNumberTicker type={"spring"} value={92.3} decimalPlaces={1} setValue={setNumber}
                                              direction={"up"} class={"h-24 text-7xl blink"}/>
                        </Match>
                    </Switch>

                    <Show when={count() < 12}>
                        <ProgressBar value={count() * 8}/>
                    </Show>
                </div>
            </div>



    );
};

export {PipBoyUpdating};