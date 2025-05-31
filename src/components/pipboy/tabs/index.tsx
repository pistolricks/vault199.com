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
            <ArkTabs.List class="absolute bottom-0 left-[10%]" role="tablist">
                <ProfilesTab/>
                <StatsTab/>
                <QuestsTab/>
                <MiscTab/>
                {/*
                <RadioTab/>
                */}

            </ArkTabs.List>
        </div>
    );
};

export default Tabs;