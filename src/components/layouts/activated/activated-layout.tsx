import {Component, createEffect, createMemo, createSignal, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import ActivatedHeader from "~/components/layouts/activated/activated-header";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";

import CommunicationsApp from "~/components/pipboy/apps/communications/communications-app";
import GalleryApp from "~/components/pipboy/apps/gallery-app";
import {createBreakpoints} from "@solid-primitives/media";
import {matches} from "~/app";


const ActivatedLayout: Component<RouteSectionProps> = props => {



    const children = () => props.children;

    const [getComponent, setComponent] = createSignal<ValidComponent>(CommunicationsApp)

    const apps = {
        sat: CommunicationsApp,
        gallery: GalleryApp,
    }

    const handleApps = (e: string) => {
        console.log(e)
        setComponent(() => apps[e])
    }

    const component = createMemo(() => {
        return getComponent()
    })


    return (
        <BaseDrawer side={matches.sm ? "right" : "bottom"} contextId={"activated-1"}>
            <div class={styles["background"] + "min-h-dvh h-dvh flex flex-col"}>
                <div class={styles["interlaced"]}></div>
                <div class={styles["glare"]}></div>
                <ActivatedHeader {...props}/>
                <div class={'flex-1 flex flex-row overflow-y-hidden'}>

                    <main
                        class={'mx-auto max-w-7xl  scrollbar-hide flex-1 text-xs overflow-y-auto'}
                    >
                        {children()}
                    </main>

                </div>
                <ActivatedFooter onClick={handleApps}/>
            </div>
            <DrawerContent
                side={matches.sm ? "right" : "bottom"}
                contextId={"activated-1"}
                class={matches.sm ? "w-sm" : "w-screen"}
            >


                <Dynamic component={component()}/>


            </DrawerContent>

        </BaseDrawer>
    );
}

export default ActivatedLayout;