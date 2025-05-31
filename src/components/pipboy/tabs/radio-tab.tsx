import {Component} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import {A} from "@solidjs/router";
import { Tabs } from "@ark-ui/solid";

type PROPS = {

}

const RadioTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            value="radio"
            data-bs-toggle="tab"
            data-bs-target="#radio"
            role="tab"
            data-play-sound={soundTypes.scifi_click}
        >
            Radio
        </Tabs.Trigger>
    );
};

export default RadioTab;