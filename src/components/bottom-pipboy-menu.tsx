import {Component, createMemo, createSignal, JSX} from "solid-js";

import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import distorted from "~/static/images/pipboyscanlines.png"
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
            <div class={"fixed inset-x-0 bottom-0  h-[20dvh] w-full flex justify-center items-center sm:max-w-sm"}>
                <img src={bottomMenu2} class={"sm:max-w-sm fixed z-20 -bottom-6 h-auto object-contain w-full"} alt={"bottom menu"}/>
                <div
                    class={"absolute z-20 animate-in slide-in-from-bottom animate duration-700 transition-all -translate-y-[10px]"}>

                    <button class={"absolute  rounded-full left-[10%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"} type={"button"} onClick={() => props.onClick(menuItems()[0].name)}>
                        <img src={distorted} class={classNames(
                            "absolute opacity-0 rounded-full left-0 bottom-0 h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full left-[28.4%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"} type={"button"} onClick={() => props.onClick(menuItems()[1].name)}>
                        <img src={distorted} class={classNames(
                            "absolute opacity-0 rounded-full left-0 bottom-0 h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full left-[47.2%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"} type={"button"} onClick={() => props.onClick(menuItems()[2].name)}>
                        <img src={distorted} class={classNames(
                            "absolute opacity-0 rounded-full left-0 bottom-0 h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full right-[26.225%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"} type={"button"} onClick={() => props.onClick(menuItems()[3].name)}>
                        <img src={distorted} class={classNames(
                            "absolute opacity-0 rounded-full left-0 bottom-0 h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full right-[8%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"} type={"button"} onClick={() => props.onClick(menuItems()[4].name)}>
                        <img src={distorted} class={classNames(
                            "absolute opacity-0 rounded-full left-0 bottom-0 h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <img src={bottomMenuRb} class={" h-full sm:max-w-sm object-contain w-screen"} alt={"bottom_menu_1"}/>
                    <img src={menuItems()[0].icon} class={classNames(
                        appName() === menuItems()[0].name ? "opacity-100" : "opacity-60",
                        "absolute -z-10 rounded-full left-[10%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]")} alt={menuItems()[0].name} />
                    <img src={menuItems()[1].icon} class={classNames(
                        appName() === menuItems()[1].name ? "opacity-100" : "opacity-60",
                        "absolute -z-10 rounded-full left-[28.4%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]")} alt={menuItems()[1].name} />
                    <img src={menuItems()[2].icon} class={classNames(
                        appName() === menuItems()[2].name ? "opacity-100" : "opacity-60",
                        "absolute -z-10 rounded-full left-[47.2%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]")} alt={menuItems()[2].name} />
                    <img src={menuItems()[3].icon} class={classNames(
                        appName() === menuItems()[3].name ? "opacity-100" : "opacity-60",
                        "absolute -z-10 rounded-full right-[26.225%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]")} alt={menuItems()[3].name} />
                    <img src={menuItems()[4].icon} class={classNames(
                        appName() === menuItems()[4].name ? "opacity-100" : "opacity-60",
                        "absolute -z-10 rounded-full right-[8%] bottom-[34.3%] h-[2rem] w-[2rem] sm:h-[2.2rem] sm:w-[2.2rem]")} alt={menuItems()[4].name} />
                </div>
            </div>
    );
};

export default BottomPipboyMenu;
