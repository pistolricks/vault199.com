import {Component, createMemo, createSignal, JSX} from "solid-js";

import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"

import {classNames} from "~/components/navigation";

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

            class={"fixed inset-x-0 bottom-0  h-[20dvh] w-full flex justify-center items-center sm:max-w-sm"}>
            <div
                style={{
                    'background-image': `url(${bottomMenuRb})`,
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'center',
                    'background-color': 'transparent'
                }}
                class={"absolute w-full h-full sm:max-w-sm z-20 animate-in slide-in-from-bottom animate duration-700 transition-all -translate-y-[12px]"}>

                <button
                    class={"absolute rounded-full shadow-2xl shadow-gray-700 ring-4 ring-gray-950/70 left-[10.4%] sm:left-[10.2%] bottom-[37%] sm:bottom-[39.5%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[0].name)}>
                    <img src={menuItems()[0].icon} class={classNames(
                        appName() === menuItems()[0].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[0].name}/>
                </button>
                <button
                    class={"absolute  rounded-full shadow-2xl shadow-gray-700 ring-4 ring-gray-950/70 left-[28.8%] sm:left-[28.6%] bottom-[37%] sm:bottom-[39.5%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[1].name)}>
                    <img src={menuItems()[1].icon} class={classNames(
                        appName() === menuItems()[1].name ? "brightness-100" : "brightness-60",
                         "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[1].name}/>
                </button>
                <button
                    class={"absolute  rounded-full shadow-2xl shadow-gray-700 ring-4 ring-gray-950/70 left-[47.4%] sm:left-[47.2%] bottom-[37%] sm:bottom-[39.5%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[2].name)}>
                    <img src={menuItems()[2].icon} class={classNames(
                        appName() === menuItems()[2].name ? "brightness-100" : "brightness-60",
                         "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[2].name}/>
                </button>
                <button
                    class={"absolute  rounded-full shadow-2xl shadow-gray-700 ring-4 ring-gray-950/70 right-[26.7%] sm:right-[26.5%] bottom-[37%] sm:bottom-[39.5%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[3].name)}>
                    <img src={menuItems()[3].icon} class={classNames(
                        appName() === menuItems()[3].name ? "brightness-100" : "brightness-60",
                         "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[3].name}/>
                </button>
                <button
                    class={"absolute  rounded-full ring-4 ring-gray-950/70 right-[8.5%] sm:right-[8.3%] bottom-[37%] sm:bottom-[39.5%] h-[1.7rem] w-[1.7rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[4].name)}>
                    <img src={menuItems()[4].icon} class={classNames(
                        appName() === menuItems()[4].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[4].name}/>
                </button>



            </div>
        </div>
    );
};

export default BottomPipboyMenu;
