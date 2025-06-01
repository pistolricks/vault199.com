import {Component} from "solid-js";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000uib.png"

import {classNames} from "~/components/navigation";
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

            class={"fixed inset-x-0 bottom-0 h-[8dvh] sm:h-[10dvh] w-full flex justify-center items-center sm:max-w-sm"}>
            <div
                style={{
                    'background-image': `url(${bottomMenuAlt})`,
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'center',
                    'background-color': 'transparent'
                }}
                class={"absolute w-full h-full object-bottom sm:max-w-xs z-20 animate-in slide-in-from-bottom animate duration-700 "}>

                <button
                    class={"absolute rounded-full shadow-2xl shadow-gray-700  left-[20.5%] sm:left-[20.2%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[0].name)}>
                    <img src={menuItems()[0].icon} class={classNames(
                        appName() === menuItems()[0].name ? "brightness-150" : "brightness-60",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[0].name}/>
                    <img src={cover} class={"transform rotate-0 absolute inset-0 size-full"} alt={"cover"}/>
                </button>

                <button
                    class={"absolute  rounded-full shadow-2xl shadow-gray-700 left-[45.8%] sm:left-[45.5%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[2].name)}>
                    <img src={menuItems()[2].icon} class={classNames(
                        appName() === menuItems()[2].name ? "brightness-150" : "brightness-60",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[2].name}/>
                    <img src={cover} class={"transform rotate-90 absolute inset-0 size-full"} alt={"cover"}/>
                </button>

                <button
                    class={"absolute  rounded-full right-[20%] sm:right-[19.6%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                    type={"button"} onClick={() => props.onClick(menuItems()[4].name)}>
                    <img src={menuItems()[4].icon} class={classNames(
                        appName() === menuItems()[4].name ? "brightness-150" : "brightness-60",
                        "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                    )} alt={menuItems()[4].name}/>
                    <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                </button>
            </div>


        </div>
    );
};

export default BottomPipboyMenu;
