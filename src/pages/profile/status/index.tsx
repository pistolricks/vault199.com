import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout, {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ProfilePanel from "~/components/pipboy/tab-content/profile-panel";
import BaseDrawer from "~/components/ui/drawer";

import status from "~/static/app/icons/ui/status.png"
import special from "~/static/app/icons/ui/special.png"
import details from "~/static/app/icons/ui/details.png"
import {MenuItem} from "~/lib/types";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "status", href: '/profile/status', icon: status},
    {name: "special", href: '/profile/special', icon: special},
    {name: "details", href: '/profile/details', icon: details},
]

const StatusSection: Component<RouteSectionProps> = props => {

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
        <BaseDrawer side={"bottom"} contextId={"activated-1"}>
            <ActivatedLayout data={data()} componentName={componentName()} {...props}>
                <PipBoy onClick={handleClick} menuItems={menuItems} setComponent={setComponentName}>
                    <ProfilePanel/>
                </PipBoy>
            </ActivatedLayout>
        </BaseDrawer>
    );
};

export default StatusSection;