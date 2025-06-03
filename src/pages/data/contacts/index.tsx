import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import DataTabPanel from "~/components/pipboy/panels/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import events from "~/static/app/icons/ui/events.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: events},
]

type PROPS = {}

const ContactsSection: Component<RouteSectionProps> = props => {

    return (
        <DataTabPanel/>
    );
};

export default ContactsSection;