import {Component, createEffect, Show} from "solid-js";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000_blank.png"

import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";
import {A, useLocation} from "@solidjs/router";

import FooterMenu from "~/components/pipboy/footer/menu";

export type MenuItem = {
    name: string;
    icon: string;
    href?: string;
}

type PROPS = {
    menuItems: MenuItem[];
    subMenuItems: MenuItem[];
    componentName?: string;
    handleFooter: (e?: any) => any;
}

const BottomPipboyMenu: Component<PROPS> = props => {
    const location = useLocation();
    const menuItems = () => props.menuItems;

    const subMenuItems = () => props.subMenuItems;

    createEffect(() => console.log("subMenuItems", subMenuItems()))

    return (
        <>


            <div
                class={"fixed z-40 left-0 sm:left-[15%] right-0 sm:right-[15%] bottom-0 w-full flex justify-center items-center sm:max-w-xs"}>

                <div
                    class={"absolute z-30 bottom-[3rem] md:bottom-[2.65rem] h-12 sm:h-10 inset-x-0 object-center   flex justify-center items-center"}>

                    <div
                        class={"h-full items-center  border-t border-green-700/50 sm:border-l sm:border-r w-[18.65rem] sm:w-[15.25rem] bg-black"}>
                        <div class={'flex justify-center items-center w-full h-full'}>
                            <Show when={props.subMenuItems?.length > 0}>

                                <FooterMenu menus={subMenuItems()} componentName={props.componentName}
                                            onClick={props.handleFooter}/>

                            </Show>
                        </div>

                    </div>

                </div>


                <div
                    style={{
                        'background-image': `url(${bottomMenuAlt})`,
                        'background-repeat': 'no-repeat',
                        'background-size': 'contain',
                        'background-position': 'center',
                        'background-color': 'transparent'
                    }}
                    class={"absolute w-full sm:max-w-xs bottom-0 z-30 h-16 sm:h-12"}>

                    <A
                        class={"absolute z-30 rounded-full shadow-2xl shadow-gray-700  left-[20.5%] sm:left-[20.2%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                        href={menuItems()[0].href}>
                        <img src={menuItems()[0].icon} class={classNames(
                            location?.pathname.includes(menuItems()[0].name) ? "brightness-[200%]" : "brightness-[50%]",
                            "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                        )} alt={menuItems()[0].name}/>
                        <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                    </A>

                    <A
                        class={"absolute  z-30 rounded-full shadow-2xl shadow-gray-700 left-[45.8%] sm:left-[45.5%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                        href={menuItems()[1].href}>
                        <img src={menuItems()[1].icon} class={classNames(
                            location?.pathname.includes(menuItems()[1].name) ? "brightness-[200%]" : "brightness-[50%]",
                            "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                        )} alt={menuItems()[1].name}/>
                        <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                    </A>

                    <A
                        class={"absolute  z-30 rounded-full right-[20%] sm:right-[19.6%] bottom-[16%] sm:bottom-[16%] h-[1.6rem] w-[1.6rem]"}
                        href={menuItems()[2].href}>
                        <img src={menuItems()[2].icon} class={classNames(
                            location?.pathname.includes(menuItems()[2].name) ? "brightness-[200%]" : "brightness-[50%]",
                            "absolute rounded-full ring-2 ring-gray-950 inset-0 h-[1.7rem] w-[1.7rem]"
                        )} alt={menuItems()[2].name}/>
                        <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
                    </A>
                </div>


            </div>
        </>
    );
};

export default BottomPipboyMenu;
