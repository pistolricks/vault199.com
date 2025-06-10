import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import {MenuItem} from "~/lib/types";

import status from "~/static/app/icons/ui/status.png"
import special from "~/static/app/icons/ui/special.png"
import details from "~/static/app/icons/ui/details.png"
import DetailsPanel from "~/components/pipboy/panels/details-panel";
import {ICharacter} from "~/components/character/config";
import char from "~/lib/character.json";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "status", href: '/profile/status', icon: status},
    {name: "special", href: '/profile/special', icon: special},
    {name: "details", href: '/profile/details', icon: details},
]

const DetailsSection: Component<RouteSectionProps> = props => {

    const character = () => props.data?.['character'] as ICharacter ?? char as ICharacter;

    return (
        <DetailsPanel character={character()}/>
    );
};

export default DetailsSection;