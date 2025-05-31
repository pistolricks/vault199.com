import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";

import PipBoy from "~/components/pipboy";
import { Tabs } from "@ark-ui/solid";

type PROPS = {}

const Dashboard: Component<RouteSectionProps> = props => {


    return (

        <ActivatedLayout {...props}>
            <PipBoy/>
        </ActivatedLayout>

    );
};

export default Dashboard;