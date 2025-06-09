import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import DataTabPanel from "~/components/pipboy/panels/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import events from "~/static/app/icons/ui/events.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import MapTabPanel from "~/components/pipboy/panels/map-tab-panel";
import {start} from "~/lib/geo";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";
import Drawer from "@corvu/drawer";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: events},
]

type PROPS = {}

const MapSection: Component<RouteSectionProps> = props => {


    return (
        <></>
    );
};

export default MapSection;