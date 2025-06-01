import { Tabs } from "@ark-ui/solid";
import {Component, createEffect} from "solid-js";
import MiscTabPanel from "~/components/pipboy/tab-content/misc-tab-panel";
import ProfilePanel from "~/components/pipboy/tab-content/profile-panel";
import {createBreakpoints} from "@solid-primitives/media";
import MediaPanel from "~/components/pipboy/tab-content/media-panel";
import DataTabPanel from "~/components/pipboy/tab-content/data-tab-panel";
import ItemsPanel from "~/components/pipboy/tab-content/items-panel";
import ContactsPanel from "~/components/pipboy/tab-content/contacts-panel";


type PROPS = {
    onClick: (e: any) => any;
}
const profiles = Object.freeze({
    vaultboy: "vaultboy",
    fullstack: "fullstack",
    teamplayer: "teamplayer",
    entertainer: "entertainer",
    nerd: "nerd",
    handyman: "handyman",
});
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
            <ItemsPanel profiles={profiles}/>
            <ProfilePanel/>
            <DataTabPanel/>
            <MiscTabPanel matches={matches} />
            <MediaPanel/>
            <ContactsPanel onClick={props.onClick} />
        </div>
    );
};

export default TabContent;