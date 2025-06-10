import {Component, createEffect} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ProfilePanel from "~/components/pipboy/panels/profile-panel";

import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import {classNames} from "~/components/navigation";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";


type PROPS = {}




const ProfileSection: Component<RouteSectionProps> = props => {


    const character = () => props.data?.['character'] as ICharacter ?? getInitialCharacter();

    createEffect(() => {
        console.log("initial", getInitialCharacter());
        console.log("field", getConfigByField("endurance"));
    })


    return (
        <ProfilePanel character={character()}/>
    );
};

export default ProfileSection;