import { Tabs } from "@ark-ui/solid";
import {Component, createEffect} from "solid-js";
import MiscTabPanel from "~/components/pipboy/tab-content/misc-tab-panel";
import StatsTabPanel from "~/components/pipboy/tab-content/stats-tab-panel";
import {createBreakpoints} from "@solid-primitives/media";
import RadioTabPanel from "~/components/pipboy/tab-content/radio-tab-panel";


type PROPS = {

}

const TabContent: Component<PROPS> = props => {

    const breakpoints = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
    };


    const matches = createBreakpoints(breakpoints);

    createEffect(() => {
        console.log(matches.sm); // true when screen width >= 640px
        console.log(matches.md);
        console.log(matches.lg); // true when screen width >= 1024px
        console.log(matches.xl); // true when screen width >= 1280px
        console.log(matches.xxl);
    });


    return (
        <div class={"tab-content"}>
            <StatsTabPanel/>
            <MiscTabPanel matches={matches} />
            <RadioTabPanel/>
        </div>
    );
};

export default TabContent;