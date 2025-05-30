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
                    class={"absolute rounded-full ring ring-amber-800 left-[9.9%] bottom-[36.7%] h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[0].name)}>
                    <img src={menuItems()[0].icon} class={classNames(
                        appName() === menuItems()[0].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                    )} alt={menuItems()[0].name}/>
                </button>
                <button
                    class={"absolute  rounded-full ring ring-amber-800 left-[28.4%] bottom-[36.7%] h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[1].name)}>
                    <img src={menuItems()[1].icon} class={classNames(
                        appName() === menuItems()[1].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                    )} alt={menuItems()[1].name}/>
                </button>
                <button
                    class={"absolute  rounded-full ring ring-amber-800 left-[47.2%] bottom-[36.7%] h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[2].name)}>
                    <img src={menuItems()[2].icon} class={classNames(
                        appName() === menuItems()[2].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                    )} alt={menuItems()[2].name}/>
                </button>
                <button
                    class={"absolute  rounded-full ring ring-amber-800 right-[26.225%] bottom-[36.7%] h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[3].name)}>
                    <img src={menuItems()[3].icon} class={classNames(
                        appName() === menuItems()[3].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                    )} alt={menuItems()[3].name}/>
                </button>
                <button
                    class={"absolute  rounded-full ring ring-amber-800 right-[8%] bottom-[36.7%] h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[4].name)}>
                    <img src={menuItems()[4].icon} class={classNames(
                        appName() === menuItems()[4].name ? "brightness-100" : "brightness-60",
                        "absolute rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                    )} alt={menuItems()[4].name}/>
                </button>



            </div>
        </div>
    );
};

export default BottomPipboyMenu;
