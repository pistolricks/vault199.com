import {Component, Setter} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import StatsTab from "~/components/pipboy/tabs/stats-tab";
import MiscTab from "~/components/pipboy/tabs/misc-tab";
import RadioTab from "./radio-tab";
import QuestsTab from "~/components/pipboy/tabs/quests-tab";
import ProfilesTab from "~/components/pipboy/tabs/profiles-tab";

type PROPS = {
    title: string;
    setTitle: Setter<string>;
}

const Tabs: Component<PROPS> = props => {

    const title = () => props.title;

    return (
            <div class="absolute z-50 top-[5.5%] sm:top-[6.75%] md:top-[5.6%] inset-x-0 w-full size-10 flex justify-between items-center" role="tablist">
                <div class={"flex justify-start items-baseline ml-[8%] mb-[5%] sm:mb-[4%] md:mb-[3.7%]"}>
                    <h2 class="pip-tab-title text-3xl md:text-4xl">{title()}</h2>
                </div>
                <ArkTabs.List class={"flex justify-end items-center space-x-1 mr-[7%] mb-[1%]"}>
                <MiscTab value={title()} setValue={props.setTitle} />
                <RadioTab value={title()} setValue={props.setTitle} />
                </ArkTabs.List>
            </div>

    );
};

export default Tabs;