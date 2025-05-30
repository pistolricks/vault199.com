import {Component} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import {A} from "@solidjs/router";
import { Tabs } from "@ark-ui/solid";

type PROPS = {

}

const StatsTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            value="stats"
            data-bs-toggle="tab"
            data-bs-target="#stats"
            role="tab"
            data-play-sound={soundTypes.scifi_click}
        >
            Stats
        </Tabs.Trigger>
    );
};

export default StatsTab;