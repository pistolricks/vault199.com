import {type Component, createEffect, createMemo, createSignal, lazy, Show, Suspense} from 'solid-js';
import {RouteSectionProps, useLocation} from '@solidjs/router';
import BaseDrawer, {DrawerContent} from './components/ui/drawer';
import {classNames} from "~/components/navigation";
import {Dynamic} from "solid-js/web";
import Cookies from "cookies-ts";

import {getGps} from "~/lib/geo";
import PipBoy from "~/components/pipboy";
import {collection} from "~/lib/menu";

import chatBox from "~/static/pipboy/chatbox/chatbox.png";
import pbMonitor from "~/static/pipboy/2000N/pb2000-monitor.png";
import pbMonitor2000 from "~/static/pipboy/2000N/pb2000_monitor_alt.png";
import {subCollection} from "~/lib/sub-menu";

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

    const [getData, setData] = createSignal<RouteSectionProps<any>>(props.data as RouteSectionProps<any>);
    const data = createMemo(async () => {
        setData(() => props.data as RouteSectionProps<any>)
        return getData();
    })


    const [getComponentName, setComponentName] = createSignal<string>("map")
    const [getCoords, setCoords] = createSignal(null)


    const handleClick = async (e: any) => {
        let coords = await getGps(setCoords);
        let obj = {companion: e, component: e.component, coords: coords}
        setComponentName(e.component)
        setCoords(coords)

        let data = getData();
        let current = Object.assign(data, obj)

        setData(current)
    }


    createEffect(async () => {
        console.log("name", getComponentName())
        console.log("data", await data())
        console.log("coords", await getCoords())
    })


    return (
        <>
            <BaseDrawer side={"bottom"} contextId={"activated-1"}>
                <main class={'scrollbar-hide'}>
                    <Show
                        fallback={
                            <>
                                <ActivatedLayout {...props}>
                                    <PipBoy menuItems={menuItems()} subMenuItems={subMenuItems()}>
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
                                    <Dynamic {...data()} component={apps[getComponentName()]}/>
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