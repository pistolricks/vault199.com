import {Component, Setter} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import { Tabs } from "@ark-ui/solid";
import audio from "~/static/app/icons/fallout/radio.png";
import {classNames} from "~/components/navigation";

type PROPS = {

}

const RadioTab: Component<{
    value: string;
    setValue: Setter<string>
}> = (props) => {

        const value = () => props.value;


    return (
        <Tabs.Trigger
            value="audio"
            data-bs-toggle="tab"
            data-bs-target="#audio"
            role="tab"
            class={classNames(
                value() === 'audio' ? "ring-2 ring-green-700 ring-offset-1 rounded-[25px]" : "",
                "br"
            )}
            data-play-sound={soundTypes.scifi_click}
            onClick={() => props.setValue(() => "audio")}
        >
            <img src={audio} class={"size-10 rounded-lg"} alt={"audio"} />
        </Tabs.Trigger>
    );
};

export default RadioTab;