import {Component, createEffect} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import {MenuItem} from "~/lib/types";
import ProfilePanel from "~/components/pipboy/panels/profile-panel";

import status from "~/static/app/icons/ui/status.png"
import special from "~/static/app/icons/ui/special.png"
import details from "~/static/app/icons/ui/details.png"
import SpecialPanel from "~/components/pipboy/panels/special-panel";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "status", href: '/profile/status', icon: status},
    {name: "special", href: '/profile/special', icon: special},
    {name: "details", href: '/profile/details', icon: details},
]

const SpecialSection: Component<RouteSectionProps> = props => {

    const character = () => props.data?.['character'] as ICharacter ?? getInitialCharacter();

    createEffect(() => {
        console.log("initial", getInitialCharacter());
        console.log("field", getConfigByField("endurance"));
    })

    return (
        <SpecialPanel character={character()}/>
    );
};

export default SpecialSection;