import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout, {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import DataTabPanel from "~/components/pipboy/tab-content/data-tab-panel";


import contacts from "~/static/app/icons/ui/contacts.png"
import map from "~/static/app/icons/ui/map.png"
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import media from "~/static/app/icons/ui/details.png";

const menuItems: MenuItem[] = [
    {name: "contacts", href: '/data/contacts', icon: contacts},
    {name: "map", href: '/data/map', icon: map},
    {name: "media", href: '/data/media', icon: media},
]

type PROPS = {}

const MediaSection: Component<RouteSectionProps> = props => {

    const [getComponentName, setComponentName] = createSignal('map')
    const [getCompanion, setCompanion] = createSignal<Contact>()
    const [getData, setData] = createSignal<ActivatedLayoutRouteData>(null)
    const [getCoords, setCoords] = createSignal(null)

    const handleClick = async (e: any) => {
        console.log(e)

        let coords = await getGps(setCoords);

        // setCoords(coords)

        setCompanion(e)
        setComponentName(e.component)

        setData({
            companion: e,
            coords: coords,
        })
    }

    const componentName = createMemo(() => getComponentName())

    const data = createMemo(async () => {
        setData({
            companion: getCompanion(),
            coords: await getCoords(),
        })
        return getData()
    })

    createEffect(async () => {
        console.log("componentName", componentName())
        console.log("data", await data())
        console.log("coords", await getCoords())

    })


    return (

        <ActivatedLayout data={data()} componentName={componentName()} {...props}>
            <PipBoy menuItems={menuItems} onClick={handleClick} setComponent={setComponentName}>
                <DataTabPanel/>
            </PipBoy>
        </ActivatedLayout>

    );
};

export default MediaSection;