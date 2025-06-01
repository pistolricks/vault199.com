import {Component, Setter} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import RadioTab from "./radio-tab";
import map from "~/static/app/icons/misc apps/30misc-apps-30.png"
import Drawer from "@corvu/drawer";
import cover from "~/static/pipboy/2000N/app_cover.png";
import {classNames} from "~/components/navigation";
import SocialTab from "~/components/pipboy/tabs/contacts-tab";
import {start} from "~/lib/geo";

type PROPS = {
    title: string;
    setTitle: Setter<string>;
    setComponent: Setter<string>;
    onClick: (e: any) => any;
}

const Tabs: Component<PROPS> = props => {

    const title = () => props.title;

    return (


        <ArkTabs.List class={"flex justify-center items-center space-x-0.5"}>
            {/*

            <Drawer.Trigger
                onClick={() => props.setComponent(() => "sat")}
                class={classNames(
                    "relative",
                    "size-10 md:size-8",
                )} contextId={"activated-1"}>
                <img src={social} class={"size-full"} alt={"misc"}/>
                <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
            </Drawer.Trigger>
              <MiscTab value={title()} setValue={props.setTitle}/>
            */}


            <SocialTab value={title()} setValue={props.setTitle}/>

            <Drawer.Trigger
                onClick={() => {
                    props.setComponent(() => "map");
                    props.onClick({component: "map"});
                    start();
                }}
                class={classNames(
                    "relative",
                    "size-10 md:size-8",
                )} contextId={"activated-1"}>
                <img src={map} class={"size-full"} alt={"misc"}/>
                <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
            </Drawer.Trigger>
            <RadioTab value={title()} setValue={props.setTitle}/>
        </ArkTabs.List>


    );
};

export default Tabs;