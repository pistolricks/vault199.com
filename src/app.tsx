import {type Component, createEffect, createMemo, createSignal, lazy, Show, Suspense} from 'solid-js';
import {RouteSectionProps, useLocation} from '@solidjs/router';
import BaseDrawer, {DrawerContent} from './components/ui/drawer';
import {classNames} from "~/components/navigation";
import {Dynamic} from "solid-js/web";
import Cookies from "cookies-ts";

import {getGps, start} from "~/lib/geo";
import PipBoy from "~/components/pipboy";
import {collection} from "~/lib/menu";

import chatBox from "~/static/pipboy/chatbox/chatbox.png";
import pbMonitor from "~/static/pipboy/2000N/pb2000-monitor.png";
import pbMonitor2000 from "~/static/pipboy/2000N/pb2000_monitor_alt.png";
import {subCollection} from "~/lib/sub-menu";
// const FalloutAudioPlayer = lazy(() => import ("~/components/ui/audio"));
const AiCompanion = lazy(() => import("~/components/ai-companion"));
const GalleryApp = lazy(() => import("~/components/pipboy/apps/gallery-app"));
const MapApp = lazy(() => import("~/components/pipboy/apps/map-app"));
const ActivatedLayout = lazy(() => import("~/components/layouts/activated/activated-layout"));


export const cookies = new Cookies()
cookies.config({expires: "30d"})


export const currentUser = () => {
    const id = () => cookies.get('id');
    const name = () => cookies.get('name');
    const username = () => cookies.get('username');
    const email = () => cookies.get('email');
    const bio = () => cookies.get('bio');
    const active = () => Boolean(cookies.get('active'));
    const created_at = () => cookies.get('created_at');
    const updated_at = () => cookies.get('updated_at');
    const token = () => cookies.get('token');


    return {
        id,
        name,
        username,
        email,
        bio,
        active,
        created_at,
        updated_at,
        token
    }
}

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px"
};


const apps = {
    aiCompanion: AiCompanion,
    gallery: GalleryApp,
    map: MapApp,
}

const pipboyTypes = {
    aiCompanion: chatBox,
    gallery: pbMonitor,
    map: pbMonitor2000,
    strength: pbMonitor2000,
    perception: pbMonitor2000,
    endurance: pbMonitor2000,
    charisma: pbMonitor2000,
    intelligence: pbMonitor2000,
    agility: pbMonitor2000,
    luck: pbMonitor2000,
}
const App: Component<RouteSectionProps> = (props) => {
    const location = useLocation();

    const menuItems = createMemo(() => {
        let m = collection.items.filter(item => item.label === location.pathname) ?? undefined;
        if (!m) return;
        console.log("m", m, location.pathname)
        return m?.[0]?.value;
    })

    const subMenuItems = createMemo(() => {
        let m = subCollection.items.filter(item => item.label === location.pathname) ?? undefined;
        if (!m) return;
        console.log("m", m, location.pathname)
        return m?.[0]?.value;
    })

    const [getData, setData] = createSignal<any>(props.data );



    const [getCompanion, setCompanion] = createSignal<any>();
    const [getComponentName, setComponentName] = createSignal<string>("map")
    const [getCoords, setCoords] = createSignal(null)



    const coords = createMemo(() => getCoords())

    createEffect(async () => {
        console.log("name", getComponentName())
        console.log("data", await data())
        console.log("getCoords", await getCoords())
        console.log("coords", await coords())

       // let op = document.querySelector("output");
       if(await getCoords()) {
           await getGps(setCoords);
       }

    })



    const handleClick = async (e: any) => {
        if(!await getCoords()?.latitude) {
            start();
        }

        await getGps(setCoords);
        console.log("handleClick", e)
        let obj = {companion: e, component: e.component, coords: await coords()}
        setComponentName(e.component)


        console.log("obj", obj)
        let data = getData();
        setData({ data: {...data, obj}})

    }



    const data = createMemo(async () => {
        setData(() => props.data as any)
        return getData();
    })

    return (
        <>
            <BaseDrawer side={"bottom"} contextId={"activated-1"}>
                <main class={'scrollbar-hide'}>
                    <Show
                        fallback={
                            <>
                                <ActivatedLayout {...props}>
                                    <PipBoy menuItems={menuItems()} subMenuItems={subMenuItems()} componentName={getComponentName()} handleFooter={handleClick}>
                                        <Suspense>{props.children}</Suspense>
                                    </PipBoy>
                                </ActivatedLayout>
                                <DrawerContent
                                    side={"bottom"}
                                    contextId={"activated-1"}
                                    style={{
                                        'background-image': 'url(' + pipboyTypes[getComponentName()] + ')',
                                        'background-size': '100% 92%',
                                        'background-repeat': 'no-repeat',
                                        'background-position': 'top',
                                        'background-color': 'black',
                                    }}
                                    class={classNames(
                                        'w-screen sm:max-w-xs',
                                    )}
                                >
                                    <Dynamic data={{
                                        coords: coords()
                                    }} component={apps[getComponentName()]}/>
                                </DrawerContent>
                            </>
                        }
                        when={location.pathname === "/"}>
                        <Suspense>{props.children}</Suspense>
                    </Show>
                </main>
            </BaseDrawer>
        </>
    );
};

export default App;