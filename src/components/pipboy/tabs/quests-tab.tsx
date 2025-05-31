import {Component} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import quests from "~/static/app/icons/apps/apple-app-3.png";

type PROPS = {}

const QuestsTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            property={"a"}
            value="quests"
            data-bs-toggle="tab"
            data-bs-target="#quests"
            role="tab"
            class={"br"}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={quests} class={"size-10 rounded-lg"} alt={"quests"} />
        </Tabs.Trigger>
    );
};

export default QuestsTab;