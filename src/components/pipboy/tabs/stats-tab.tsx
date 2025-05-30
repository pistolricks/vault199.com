import {Component} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import {A} from "@solidjs/router";

type PROPS = {

}

const StatsTab: Component<PROPS> = props => {

    return (
        <A
            href="#stats"
            data-bs-toggle="tab"
            data-bs-target="#stats"
            role="tab"
            data-play-sound={soundTypes.scifi_click}
        >
            Stats
        </A>
    );
};

export default StatsTab;