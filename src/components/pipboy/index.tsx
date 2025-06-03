import {Component, createEffect, createMemo, createSignal, JSXElement, onCleanup, Setter, Show} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";
import HeaderMenu from "~/components/pipboy/header/menu";
import {useLocation} from "@solidjs/router";
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import BottomPipboyRoutingMenu from "~/components/pipboy/footer/bottom-pipboy-routing-menu";
import styles from "~/components/layouts/activated/style.module.css";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";

type PROPS = {
    display?: string;
    menuItems?: MenuItem[];
    children?: JSXElement;
}

const menuItems: MenuItem[] = [
    {name: "profile", href: '/profile', icon: stats},
    {name: "items", href: '/items', icon: items},
    {name: "data", href: '/data', icon: data},
]

const PipBoy: Component<PROPS> = props => {
    let cursor!: HTMLDivElement;

    const location = useLocation();

    const children = () => props.children;

    const [getTitle, setTitle] = createSignal("stats")

    const addCursor = () => {
        if (cursor) {
            cursor.classList.remove("cursor-default");
            cursor.classList.add("cursor-active");
        }
    };

    const removeCursor = () => {
        if (cursor) {
            cursor.classList.remove("cursor-active");
            cursor.classList.add("cursor-default");
        }
    };

    createEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (cursor) {
                cursor.style.left = event.pageX + "px";
                cursor.style.top = event.pageY + "px";
            }
        };

        // Add event listeners
        window.addEventListener("mouseenter", addCursor);
        window.addEventListener("mouseleave", removeCursor);
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup: remove event listeners when the effect is disposed
        onCleanup(() => {
            window.removeEventListener("mouseenter", addCursor);
            window.removeEventListener("mouseleave", removeCursor);
            window.removeEventListener("mousemove", handleMouseMove);
        });
    });

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
                                <div
                                    class="absolute top-11.5 w-full px-1 grid grid-cols-7 place-items-center uppercase border-t border-[rgb(var(--main))]">
                                    <span
                                        class={"col-span-2"}>{location.pathname.split("/")[2] ? location.pathname.split("/")[1].replaceAll("/", "") : ""}</span>
                                    <span class={"col-span-3"}></span>
                                    <span
                                        class={"col-span-2"}>{location.pathname.split("/")[2] ? location.pathname.split("/")[2].replaceAll("/", "") : location.pathname.replaceAll("/", "")}</span>
                                </div>

                                {children()}

                            </div>
                            <div class="piece glow noclick"></div>
                            <div class="piece scanlines noclick"></div>
                            <ActivatedFooter hp={8} hpMax={10} ap={4} apMax={10} level={40}/>
                        </div>
                    </div>

                    <div ref={cursor} class="cursor">
                        <img
                            src="https://res.cloudinary.com/kibibyte/image/upload/v1656953740/nv-cursor_ha9i6j.png"
                            alt="PipBoy Cursor" // Added alt attribute for accessibility
                            height={28}
                        />
                    </div>

                </div>

            </div>
            <BottomPipboyRoutingMenu menuItems={menuItems}/>

        </ArkTabs.Root>

    );
};

export default PipBoy;