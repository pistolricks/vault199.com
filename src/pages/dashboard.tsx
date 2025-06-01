import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import { Tabs } from "@ark-ui/solid";

type PROPS = {}

const Dashboard: Component<RouteSectionProps> = props => {

    const [getComponentName, setComponentName] = createSignal('map')
    const [getData, setData] = createSignal(null)

    const handleClick = (e: any) => {
        console.log(e)
        setComponentName(e.component)
        setData({
            companion: e
        })
    }

    const componentName = createMemo(() => getComponentName())

    const data = createMemo(() => getData())

    createEffect(() => {
        console.log("componentName", componentName())
        console.log("data", data())
    })



    return (

        <ActivatedLayout data={{
            companion: data()?.companion
        }} componentName={componentName()} {...props}>
            <PipBoy onClick={handleClick} setComponent={setComponentName} />
        </ActivatedLayout>

    );
};

export default Dashboard;