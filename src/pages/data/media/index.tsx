import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import {ActivatedLayoutRouteData} from "~/lib/types";
import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import DataTabPanel from "~/components/pipboy/panels/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import media from "~/static/app/icons/ui/details.png";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: media},
]

type PROPS = {}

const MediaSection: Component<RouteSectionProps> = props => {


    return (
      <></>
    );
};

export default MediaSection;