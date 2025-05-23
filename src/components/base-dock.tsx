import {Dock, DockIcon} from "~/components/ui/dock";
import {A} from "@solidjs/router";

import navigation from "~/static/app/icons/bottom_bar/apple-app-alt-18.png"
import sat from "~/static/app/icons/bottom_bar/browser.png"
import profile from "~/static/app/icons/bottom_bar/apple-app-alt-23.png"
import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
import drawer from "~/static/app/icons/bottom_bar/apple-app-alt-26.png"

import Drawer from "@corvu/drawer";
export default function BaseDock(props: {
    onClick: (e: string) => any
}) {
    return (
        <div class={"absolute bottom-2 sm:bottom-5"}>
            <Dock>
                <Drawer.Trigger onClick={() => props.onClick("navigation")} contextId={"activated-1"}  as={DockIcon}>
                    <img src={navigation} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-2xl" alt={"navigation"}/>
                </Drawer.Trigger>
                <Drawer.Trigger onClick={() => props.onClick("chat")} contextId={"activated-1"}  as={DockIcon}>
                    <img src={chat} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-2xl" alt={"chat"}/>
                </Drawer.Trigger>
                <Drawer.Trigger onClick={() => props.onClick("drawer")} contextId={"activated-1"}  as={DockIcon}>
                    <img src={drawer} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-2xl" alt={"drawer"}/>
                </Drawer.Trigger>
                <Drawer.Trigger onClick={() => props.onClick("profile")} contextId={"activated-1"}  as={DockIcon}>
                    <img src={profile} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-2xl" alt={"profile"}/>
                </Drawer.Trigger>

                <Drawer.Trigger onClick={() => props.onClick("sat")} contextId={"activated-1"}  as={DockIcon}>
                    <img src={sat} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-2xl" alt={"sat"}/>
                </Drawer.Trigger>
            </Dock>
        </div>
    );
}