import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout, {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ItemsPanel from "~/components/pipboy/tab-content/items-panel";



import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"
import {MenuItem} from "~/lib/types";

const profiles = Object.freeze({
    vaultboy: "vaultboy",
    fullstack: "fullstack",
    teamplayer: "teamplayer",
    entertainer: "entertainer",
    nerd: "nerd",
    handyman: "handyman",
});

const menuItems: MenuItem[] = [
    {name: "weapons", href: '/items/weapons', icon: weapons},
    {name: "armor", href: '/items/armor', icon: armor},
    {name: "misc", href: '/items/misc', icon: misc}
]

type PROPS = {}

const WeaponsSection: Component<RouteSectionProps> = props => {

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
                <ItemsPanel profiles={profiles}/>
            </PipBoy>
        </ActivatedLayout>

    );
};

export default WeaponsSection;