import {Component} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import profile from "~/static/app/icons/apps/apple-app-19.png"


type PROPS = {}

const ProfilesTab: Component<PROPS> = props => {

    return (
        <Tabs.Trigger
            property={"a"}
            value="profiles"
            data-bs-toggle="tab"
            data-bs-target="#profiles"
            role="tab"
            class={"br"}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={profile} class={"size-10 rounded-lg"} alt={"profile"} />
        </Tabs.Trigger>
    );
};

export default ProfilesTab;