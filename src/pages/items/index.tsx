import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout, {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ItemsPanel from "~/components/pipboy/tab-content/items-panel";
import BaseDrawer from "~/components/ui/drawer";
import {MenuItem} from "~/components/bottom-pipboy-menu";
import items from "~/static/app/icons/fallout/shopping.png";
import stats from "~/static/app/icons/apps/apple-app-19.png";
import data from "~/static/app/icons/fallout/tasks-work.png";
import armor from "~/static/app/icons/fallout/gym.png"
const profiles = Object.freeze({
    vaultboy: "vaultboy",
    fullstack: "fullstack",
    teamplayer: "teamplayer",
    entertainer: "entertainer",
    nerd: "nerd",
    handyman: "handyman",
});

const menuItems: MenuItem[] = [
    {name: "weapons", href: '/items/weapons', icon: items},
    {name: "armor", href: '/items/armor', icon: armor},
    {name: "misc", href: '/items/misc', icon: data}
]

type PROPS = {}

const ItemsSection: Component<RouteSectionProps> = props => {

    const [getComponentName, setComponentName] = createSignal('map')
    const [getCompanion, setCompanion] = createSignal<Contact>()
    const [getData, setData] = createSignal<ActivatedLayoutRouteData>(null)
    const [getCoords, setCoords] = createSignal(null)

    const handleClick = async(e: any) => {
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

    const data = createMemo(async() => {
        setData({
            companion: getCompanion(),
            coords: await getCoords(),
        })
        return getData()
    })

    createEffect(async() => {
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

export default ItemsSection;