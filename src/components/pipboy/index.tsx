import {Component, createMemo, createSignal, JSXElement, Show} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";
import HeaderMenu from "~/components/pipboy/header/menu";
import {useLocation} from "@solidjs/router";
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import BottomPipboyRoutingMenu from "~/components/pipboy/footer/bottom-pipboy-routing-menu";
import styles from "~/components/layouts/activated/style.module.css";
import {ICharacter} from "~/components/character/config";
import ActivatedHeader from "~/components/layouts/activated/activated-header";
import {useAppContext} from "~/context/app-provider";

type PROPS = {
    character?: ICharacter;
    display?: string;
    menuItems?: MenuItem[];
    subMenuItems?: MenuItem[];
    componentName?: string;
    handleFooter?: (e?: any) => any;
    children?: JSXElement;
}

const menuItems: MenuItem[] = [
    {name: "items", href: '/items', icon: items},
    {name: "profile", href: '/profile', icon: stats},
    {name: "data", href: '/data', icon: data},
]

const PipBoy: Component<PROPS> = props => {
    let cursor!: HTMLDivElement;

    const {getContact} = useAppContext();

    const location = useLocation();

    const character = () => props.character;

    const children = () => props.children;

    const [getTitle, setTitle] = createSignal("stats")

    const [getSubMenu, setSubMenu] = createSignal(props.subMenuItems!);


    const title = createMemo(() => getTitle())


    return (

        <ArkTabs.Root defaultValue={"stats"} class={"h-full w-full overflow-hidden"}>

            <div class="bbody" style={props.display}>

                <div id="frame" class="frame rounded-t-[35px] sm:rounded-[90px]">

                    <div class="piece output container">
                        <div class="pipboy">

                            <div class={styles["glare"]}></div>
                            <div class={styles["interlaced"]}></div>

                            <div
                                class={'w-full h-full pt-11 sm:pt-10 rounded-t-[30px] sm:rounded-[60px] sm:ring-green-700 bg-green-950 border border-green-950 sm:border-green-700/50 '}>
                                <div
                                    class={"absolute z-50 top-0 h-11 sm:h-10 inset-x-0 object-bottom w-full flex justify-center items-center"}>
                                    <div
                                        class={"w-32 sm:w-28 h-full items-center border-r border-l border-b border-green-700/50  bg-black"}>
                                        <div class={'flex justify-center items-center w-full h-full'}>
                                            <Show when={props.menuItems?.length > 0}>
                                                <HeaderMenu menus={props.menuItems}/>
                                            </Show>
                                        </div>

                                    </div>
                                </div>
                                <ActivatedHeader {...character()}/>
                                <div
                                    class="absolute top-7 sm:top-9 w-full px-1 grid grid-cols-7 place-items-center uppercase border-b  border-[rgb(var(--main))]">
                                    <span
                                        class={"col-span-2"}>{location.pathname.split("/")[2] ? location.pathname.split("/")[1].replaceAll("/", "") : location.pathname.replaceAll("/", "")}</span>
                                    <span class={"col-span-3"}></span>
                                    <span
                                        class={"col-span-2"}>{location.pathname.split("/")[2] ? location.pathname.split("/")[2].replaceAll("/", "") : ""}</span>
                                </div>

                                {children()}

                            </div>
                            <div class="piece glow noclick"></div>
                            <div class="piece scanlines noclick"></div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomPipboyRoutingMenu menuItems={menuItems} subMenuItems={props.subMenuItems}
                                     componentName={props.componentName} handleFooter={props.handleFooter}/>
        </ArkTabs.Root>
    );
};

export default PipBoy;