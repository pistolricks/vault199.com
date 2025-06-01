import {Component} from "solid-js";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000uib.png"

import {classNames} from "~/components/navigation";
import { Tabs } from "@ark-ui/solid";
import cover from "~/static/pipboy/2000N/app_cover.png";

export type MenuItem = {
    name: string;
    icon: string;
}

type PROPS = {
    onClick?: (e: string) => any;
    appName?: string;
    menuItems: MenuItem[];
}

const BottomPipboyMenu: Component<PROPS> = props => {

    const appName = () => props.appName;

    const menuItems = () => props.menuItems;

    return (
        <div

            class={"fixed z-40 left-0 sm:left-[15%] right-0 sm:right-[15%] -bottom-2 h-[8dvh] sm:h-[10dvh] md:h-[11dvh] w-full flex justify-center items-center sm:max-w-sm"}>
            <Tabs.List
                style={{
                    'background-image': `url(${bottomMenuAlt})`,
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'center',
                    'background-color': 'transparent'
                }}
                class={"absolute w-full h-full sm:max-w-sm z-20 animate-in slide-in-from-bottom animate duration-700 transition-all -translate-y-[10px]"}>

                <Tabs.Trigger
                    value={menuItems()[0].name}
                    class={"absolute rounded-full shadow-2xl shadow-gray-700  left-[20.5%] sm:left-[20.2%] md:left-[21.5%] bottom-[16%] sm:bottom-[16%] md:bottom-[13%] h-[1.7rem] w-[1.7rem]"}
                    data-bs-toggle="tab"
                    data-bs-target={`#${menuItems()[0].name}`}
                    role="tab"
                    onClick={() => props.onClick(menuItems()[0].name)}>
                    <img src={menuItems()[0].icon} class={classNames(
                        appName() === menuItems()[0].name ? "brightness-200" : "brightness-100",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[0].name}/>
                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </Tabs.Trigger>

                <Tabs.Trigger
                    value={menuItems()[1].name}
                    data-bs-toggle="tab"
                    data-bs-target={`#${menuItems()[1].name}`}
                    role="tab"
                    class={"absolute  rounded-full shadow-2xl shadow-gray-700 left-[45.8%] sm:left-[45.5%] md:left-[46.2%] bottom-[16%] sm:bottom-[16%] md:bottom-[13%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[1].name)}>
                    <img src={menuItems()[1].icon} class={classNames(
                        appName() === menuItems()[1].name ? "brightness-200" : "brightness-100",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[1].name}/>
                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </Tabs.Trigger>

                <Tabs.Trigger
                    value={menuItems()[2].name}
                    data-bs-toggle="tab"
                    data-bs-target={`#${menuItems()[2].name}`}
                    role="tab"
                    class={"absolute  rounded-full right-[20%] sm:right-[19.6%] md:right-[21%] bottom-[16%] sm:bottom-[16%] md:bottom-[13%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[2].name)}>
                    <img src={menuItems()[2].icon} class={classNames(
                        appName() === menuItems()[2].name ? "brightness-200" : "brightness-100",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[2].name}/>
                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </Tabs.Trigger>
            </Tabs.List>


        </div>
    );
};

export default BottomPipboyMenu;
