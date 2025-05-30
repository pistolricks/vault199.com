import { Tabs } from "@ark-ui/solid";
import {Component} from "solid-js";
import MiscTabPanel from "~/components/pipboy/tab-content/misc-tab-panel";


type PROPS = {

}

const TabContent: Component<PROPS> = props => {

    return (
        <Tabs.Content value={"misc"}  class={"tab-content"}>
            <MiscTabPanel/>
        </Tabs.Content>
    );
};

export default TabContent;