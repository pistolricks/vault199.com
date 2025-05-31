import {Component, createMemo, createSignal, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";
import pbMonitor from "~/static/pipboy/2000N/pb2000-monitor.png"
import CommunicationsApp from "~/components/pipboy/apps/communications/communications-app";
import GalleryApp from "~/components/pipboy/apps/gallery-app";
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000-monitor.png"
import {classNames} from "~/components/navigation";
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000uib.png"

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
        <BaseDrawer side={"bottom"} contextId={"activated-1"}>
            <div class={styles["background"] + "min-h-dvh h-dvh flex flex-col"}>


                <div
                    style={{
                        'background-image': `url(${pbMonitor3000})`,
                        'background-repeat': 'no-repeat',
                        'background-size': '100% 100%',
                    }}
                    class={"fixed inset-0 w-full h-full z-0 flex flex-row overflow-hidden"}></div>


                <div class={styles["interlaced"]}></div>
                <div class={styles["glare"]}></div>
                {children()}


                <ActivatedFooter onClick={handleApps}/>

            </div>
            <DrawerContent
                side={"bottom"}
                contextId={"activated-1"}
                style={{
                    'background-image': 'url(' + pbMonitor + ')',
                    'background-size': '100% 92%',
                    'background-repeat': 'no-repeat',
                    'background-position': 'top',
                    'background-color': 'black',
                }}
                class={classNames(
                    'w-screen sm:max-w-xs',
                )}
            >


                <Dynamic component={component()}/>

                <img src={bottomMenu2}
                     class={"sm:max-w-xs fixed -z-20 bottom-0 sm:-bottom-2 h-[53px] object-contain w-full"}
                     alt={"bottom menu"}/>
            </DrawerContent>
        </BaseDrawer>

    );
}

export default ActivatedLayout;