import {Component} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import { Tabs } from "@ark-ui/solid";
import radio from "~/static/app/icons/fallout/radio.png";

type PROPS = {

}

const RadioTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            value="radio"
            data-bs-toggle="tab"
            data-bs-target="#radio"
            role="tab"
            class={"br"}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={radio} class={"size-10 rounded-lg"} alt={"radio"} />
        </Tabs.Trigger>
    );
};

export default RadioTab;