import {Component, Setter} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import MiscTab from "~/components/pipboy/tabs/misc-tab";
import RadioTab from "./radio-tab";

type PROPS = {
    title: string;
    setTitle: Setter<string>;
}

const Tabs: Component<PROPS> = props => {

    const title = () => props.title;

    return (


            <ArkTabs.List class={"flex justify-center items-center space-x-0.5"}>
                <MiscTab value={title()} setValue={props.setTitle}/>
                <RadioTab value={title()} setValue={props.setTitle}/>
            </ArkTabs.List>


    );
};

export default Tabs;