import {Component, createMemo, createSignal, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";
import {RouteSectionProps, useIsRouting} from "@solidjs/router";
import styles from "./style.module.css"
import ActivatedHeader from "~/components/layouts/activated/activated-header";
import FalloutNvSvg from "~/components/ui/svgs/fallout_nv_svg";
import SvgDraw from "~/components/ui/gsap/svg-draw";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";

import SatApp from "~/components/pipboy/apps/sat-app";


const ActivatedLayout: Component<RouteSectionProps> = props => {

    const children = () => props.children;

    const [getComponent, setComponent] = createSignal<ValidComponent>(SatApp)

    const apps = {
       sat: SatApp
    }

    const handleApps = (e: string) => {
        console.log(e)
        setComponent(() => apps[e])
    }

    const component = createMemo(() => {
        return getComponent()
    })


    return (
        <BaseDrawer side={"bottom"} contextId={"activated-1"}>
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
                    <SvgDraw class={"bg-[#001423] absolute inset-0 top-11 w-screen  h-[90dvh]"}>
                        <FalloutNvSvg/>
                    </SvgDraw>
                </div>
                <ActivatedFooter onClick={handleApps}/>
            </div>
            <DrawerContent
                side={"bottom"}
                contextId={"activated-1"}
                class={styles.glass}
            >



                <Dynamic component={component()} />


            </DrawerContent>

        </BaseDrawer>
    );
}

export default ActivatedLayout;