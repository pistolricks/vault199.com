import {Component} from "solid-js";
import { Tabs as ArkTabs } from "@ark-ui/solid";
import StatsTab from "~/components/pipboy/tabs/stats-tab";
import MiscTab from "~/components/pipboy/tabs/misc-tab";

type PROPS = {

}

const Tabs: Component<PROPS> = props => {

    return (
        <div>
            <ArkTabs.List class="pip-foot" role="tablist">

                    <MiscTab />

            </ArkTabs.List>
        </div>
    );
};

export default Tabs;