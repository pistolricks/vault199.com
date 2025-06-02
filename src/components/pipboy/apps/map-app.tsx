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


    const menuItems: MenuItem[] = [
        {name: "right", icon: right},
        {name: "mail", icon: mail},
        {name: "contacts", icon: contacts},
        {name: "call", icon: call},
        {name: "left", icon: left},
    ]


    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
    }

    const communications = createMemo(() => getComm())


    createEffect(() => {

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

                <MapWrapper data={props.data}/>


            </div>
            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>
        </>
    );
};

export default MapApp;