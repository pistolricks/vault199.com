import {Component, createEffect, createMemo} from "solid-js";
import {RouteSectionProps, useLocation} from "@solidjs/router";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import events from "~/static/app/icons/ui/events.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";

import ScreenLayout from "~/components/layouts/screen/screen-layout";
import {ContactList} from "~/components/lists/contact-list";
import {companions} from "~/lib/companions";
import {useAppContext} from "~/context/app-provider";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: events},
]

type PROPS = {}

const ContactSection: Component<RouteSectionProps> = props => {

    const {setContact} = useAppContext();

    const location = useLocation();

    const companion = createMemo(() => companions.find((companion) => location.pathname.includes(companion.title)))

    createEffect(() => {
        setContact(companion())
        console.log(companion())
    })

    const handleClick = () => {

    }

    return (
        <div class={'w-full h-[10rem] mt-6 md:mt-10'}>

                <div class={"text-[rgb(var(--main))] p-4 grid grid-cols-1 md:grid-cols-2 md:gap-4"}>
                    <div class={"flex justify-center items-start"}>
                        <img src={companion()?.avatar} class={"w-full border border-[rgb(var(--main))]/50  object-cover  md:object-contain"} alt={""}/>
                    </div>
                    <div class={"flex flex-col"}>
                        <ul class="info-table">
                            <li class="vboy-wrap"></li>
                            <li class={"uppercase"}>
                                <b>Name</b>
                                <span class={"pr-2"}>{companion()?.name}</span>
                            </li>

                            <li>
                                <b class={"uppercase"}>Username</b>
                                <span class={"lowercase pr-2"}>{companion()?.username}</span>
                            </li>
                            <li>
                                <b class={"uppercase"}>Mail</b>
                                <span class={"lowercase pr-2"}>{companion()?.email}</span>
                            </li>
                        </ul>
                        <ul class="info-table grid-cols-2 gap-1 uppercase hidden md:grid">
                            <li>
                                <b>id</b>
                                {companion()?.id}
                            </li>
                            <li class="clear">
                                <b>p</b>
                                {companion()?.phone}
                            </li>
                        </ul>
                        <p class="extra"
                           style={{'padding-left': 0, 'padding-bottom': '10dvh', 'overflow-y': "auto", 'overflow-x': "hidden", height: '25dvh'}}>
                            {companion()?.bio}
                        </p>
                    </div>
                </div>

        </div>
    );
};

export default ContactSection;