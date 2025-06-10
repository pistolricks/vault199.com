import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ItemsPanel from "~/components/pipboy/panels/items-panel";
import {
    MenuItem
} from "~/components/pipboy/footer/bottom-pipboy-menu";

import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"

const profiles = Object.freeze({
    vaultboy: "vaultboy",
    fullstack: "fullstack",
    teamplayer: "teamplayer",
    entertainer: "entertainer",
    nerd: "nerd",
    handyman: "handyman",
});

const menuItems: MenuItem[] = [
    {name: "weapons", href: '/items/weapons', icon: weapons},
    {name: "armor", href: '/items/armor', icon: armor},
    {name: "misc", href: '/items/misc', icon: misc}
]

type PROPS = {}

const ItemsSection: Component<RouteSectionProps> = props => {

    return (
        <></>
    );
};

export default ItemsSection;