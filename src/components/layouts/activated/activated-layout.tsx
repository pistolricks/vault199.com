import {Component, createEffect, createMemo, createSignal, Show, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";
import pbMonitor from "~/static/pipboy/2000N/pb2000-monitor.png"
import pbMonitor2000 from "~/static/pipboy/2000N/pb2000_monitor_alt.png"
import chatBox from "~/static/pipboy/chatbox/chatbox.png"
import CommunicationsApp from "~/components/pipboy/apps/communications/communications-app";
import GalleryApp from "~/components/pipboy/apps/gallery-app";
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000-monitor.png"
import {classNames} from "~/components/navigation";
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000uib.png"
import MapApp from "~/components/pipboy/apps/map-app";
import AiCompanion from "~/components/ai-companion";
import cloverAvatar from "~/static/companions/clover/clover.webp";
import {Contact} from "~/components/lists/contact-list";
const apps = {
    aiCompanion: AiCompanion,
    gallery: GalleryApp,
    map: MapApp,
}

const pipboyTypes = {
    aiCompanion: chatBox,
    gallery: pbMonitor,
    map: pbMonitor2000,
}

export interface ActivatedLayoutRouteData {
    companion?: Contact; // Making companion optional as props.data?.companion suggests it might not always exist
    title?: string;
    avatar?: string;
    coords?: GeolocationCoordinates;
    component?: string;
}

const ActivatedLayout: Component<RouteSectionProps & { componentName: string } > = props => {

    const componentName = () => props.componentName;
    const children = () => props.children;

    const [getData, setData] = createSignal<ActivatedLayoutRouteData>(props.data);




    const [getComponent, setComponent] = createSignal<ValidComponent>(apps[componentName()])



    const [getPipboyType, setPipboyType] = createSignal<string>(pipboyTypes[componentName()])


    const handleApps = (e: string) => {
        console.log(e)
        setComponent(() => apps[e])
    }

    const component = createMemo(() => {
        setComponent(() => apps[componentName()])
        return getComponent()
    })


    const pipboyType = createMemo(() => {
        setPipboyType(() => pipboyTypes[componentName()])
        console.log(
            pipboyTypes[componentName()]
        )
        return getPipboyType()
    })


    createEffect(async() => {

        setData(await props.data)
        console.log("getData",getData(),"activeLayoutData", await props.data)
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




            </div>
            <DrawerContent
                side={"bottom"}
                contextId={"activated-1"}
                style={{
                    'background-image': 'url(' + pipboyType() + ')',
                    'background-size': '100% 92%',
                    'background-repeat': 'no-repeat',
                    'background-position': 'top',
                    'background-color': 'black',
                }}
                class={classNames(
                    'w-screen sm:max-w-xs',
                )}
            >

                <Dynamic data={getData()} component={component()}/>


            </DrawerContent>
        </BaseDrawer>

    );
}

export default ActivatedLayout;