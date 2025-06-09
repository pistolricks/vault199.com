import {Component, createEffect, createMemo, createSignal} from "solid-js";
import map3 from "~/static/maps/map3.png"
import pbMonitor2000 from "~/static/pipboy/2000N/pb2000_monitor_alt.png";

import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png";
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png";
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png";
import left from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import MapWrapper from "~/components/wrappers/map-wrapper";
import {ActivatedLayoutRouteData} from "~/lib/types"
import BottomPipboyMenu, {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";

type PROPS = {
    data?: ActivatedLayoutRouteData
}

const MapApp: Component<PROPS> = props => {

    const [getComm, setComm] = createSignal("")
    const [getZoom, setZoom] = createSignal(8)

    const menuItems: MenuItem[] = [
        {name: "left", icon: left},
        {name: "mail", icon: mail},
        {name: "contacts", icon: contacts},
        {name: "call", icon: call},
        {name: "right", icon: right},
    ]


    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
        if(app === 'left')setZoom(() => 8)
        if(app === 'right')setZoom(() => 16)
    }

    const communications = createMemo(() => getComm())

    const zoom = createMemo(() => getZoom())

    createEffect(() => {
        console.log("data", props.data?.coords, "comm", communications())
    })

    return (
        <>
            <div
                data-corvu-no-drag={true}
                style={{
                    'background-image': `url(${map3})`,
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'background-size': 'cover',
                }}
                class={" absolute left-5 right-5 top-8 bottom-20"}>

                <MapWrapper data={props.data} zoom={zoom()} />


            </div>
            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>
        </>
    );
};

export default MapApp;