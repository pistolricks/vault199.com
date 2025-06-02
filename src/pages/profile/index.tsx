import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ProfilePanel from "~/components/pipboy/tab-content/profile-panel";

import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import {classNames} from "~/components/navigation";


type PROPS = {}




const ProfileSection: Component<RouteSectionProps> = props => {

    return (
        <ProfilePanel/>
    );
};

export default ProfileSection;