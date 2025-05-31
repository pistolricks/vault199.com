import {Component} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import StatsTab from "~/components/pipboy/tabs/stats-tab";
import MiscTab from "~/components/pipboy/tabs/misc-tab";
import RadioTab from "./radio-tab";
import QuestsTab from "~/components/pipboy/tabs/quests-tab";
import ProfilesTab from "~/components/pipboy/tabs/profiles-tab";

type PROPS = {}

const Tabs: Component<PROPS> = props => {

    return (
        <div>
            <ArkTabs.List class="absolute bottom-1 left-2 inset-x-0 flex justify-start w-full space-x-[10px]" role="tablist">
                <ProfilesTab/>
                <StatsTab/>
                <QuestsTab/>
                {/*
                <MiscTab/>
                */}
                <RadioTab/>

                <ArkTabs.Indicator class={"ring ring-white absolute inset-0 size-10 rounded-xl"} />
            </ArkTabs.List>
        </div>
    );
};

export default Tabs;