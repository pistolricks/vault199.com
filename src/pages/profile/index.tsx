import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout, {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ProfilePanel from "~/components/pipboy/tab-content/profile-panel";
import BaseDrawer from "~/components/ui/drawer";

import social from "~/static/app/icons/fallout/social.png";
import map from "~/static/app/icons/misc apps/30misc-apps-30.png";
import audio from "~/static/app/icons/fallout/radio.png";
import {MenuItem} from "~/components/bottom-pipboy-menu";
import stats from "~/static/app/icons/apps/apple-app-19.png";
import items from "~/static/app/icons/fallout/shopping.png";
import data from "~/static/app/icons/fallout/tasks-work.png";


type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "stats", href: '/profile/stats', icon: items},
    {name: "contacts", href: '/profile/contacts', icon: items},
    {name: "media", href: '/profile/media', icon: data},
]

const ProfileSection: Component<RouteSectionProps> = props => {

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
        <BaseDrawer side={"bottom"} contextId={"activated-1"}>
        <ActivatedLayout data={data()} componentName={componentName()} {...props}>
            <PipBoy onClick={handleClick} menuItems={menuItems} setComponent={setComponentName}>
                <ProfilePanel/>
            </PipBoy>
        </ActivatedLayout>
        </BaseDrawer>
    );
};

export default ProfileSection;