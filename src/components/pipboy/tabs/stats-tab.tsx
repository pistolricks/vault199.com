import {Component} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import { Tabs } from "@ark-ui/solid";
import stats from "~/static/app/icons/fallout/security.png";

type PROPS = {

}

const StatsTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            value="stats"
            data-bs-toggle="tab"
            data-bs-target="#stats"
            role="tab"
            class={"br"}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={stats} class={"size-10 rounded-lg"} alt={"stats"} />
        </Tabs.Trigger>
    );
};

export default StatsTab;