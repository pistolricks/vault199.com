import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import {ActivatedLayoutRouteData} from "~/lib/types"
import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ItemsPanel from "~/components/pipboy/panels/items-panel";
import {
    MenuItem
} from "../../../../../../../Volumes/ssd/home/WebstormProjects/vault199/src/components/pipboy/footer/bottom-pipboy-menu";
import data from "~/static/app/icons/fallout/tasks-work.png";

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
        <ItemsPanel profiles={profiles}/>
    );
};

export default ItemsSection;