import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import DataTabPanel from "~/components/pipboy/panels/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import events from "~/static/app/icons/ui/events.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import CommunicationsApp, {companions} from "~/components/pipboy/apps/communications/communications-app";
import ScreenLayout from "~/components/layouts/screen/screen-layout";
import {ContactList} from "~/components/lists/contact-list";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: events},
]

type PROPS = {}

const ContactsSection: Component<RouteSectionProps> = props => {

    const handleClick = () => {

    }

    return (
        <div class={"flex justify-center items-center h-full w-full"}>


            <ContactList onClick={handleClick} height={"70dvh"} list={companions}/>


        </div>
    );
};

export default ContactsSection;