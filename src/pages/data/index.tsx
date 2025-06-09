import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import DataTabPanel from "~/components/pipboy/panels/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import media from "~/static/app/icons/ui/details.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: media},
]

type PROPS = {}

const DataSection: Component<RouteSectionProps> = props => {


    return (
        <></>
    );
};

export default DataSection;