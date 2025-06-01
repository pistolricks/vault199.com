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
                "rounded-tr-2xl",
                "size-10 md:size-8",
                value() === 'audio' ? "brightness-[200%]" : "",
            )}
            data-play-sound={soundTypes.scifi_click}
            onClick={() => props.setValue(() => "audio")}
        >
            <img src={audio} class={"size-full rounded-tr-2xl md:rounded-none"} alt={"audio"} />
        </Tabs.Trigger>
    );
};

export default RadioTab;