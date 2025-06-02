import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import {ActivatedLayoutRouteData} from "~/lib/types"
import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import BaseDrawer from "~/components/ui/drawer";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";
import ProfilePanel from "~/components/pipboy/tab-content/profile-panel";
import {collection} from "~/lib/menu";


type PROPS = {}

const Dashboard: Component<RouteSectionProps> = props => {


    createEffect(() => {
        console.log(collection.items.filter(item => item.label === "profile"))

    })


    return (
        <>
            <ProfilePanel/>
        </>
    );
};

export default Dashboard;