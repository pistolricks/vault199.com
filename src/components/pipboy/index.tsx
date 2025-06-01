import {Component, createEffect, createMemo, createSignal, JSXElement, onCleanup, Setter} from "solid-js";
import Tabs from "~/components/pipboy/tabs";
import TabContent from "~/components/pipboy/tab-content";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import BottomPipboyTabs from "~/components/bottom-pipboy-tabs";
import {MenuItem} from "~/components/bottom-pipboy-menu";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";
import HeaderMenu from "~/components/pipboy/header/menu";
import BottomPipboyRoutingMenu from "~/components/bottom-pipboy-routing-menu";
import {useLocation} from "@solidjs/router";

type PROPS = {
    display?: string;
    setComponent: Setter<string>;
    onClick?: (e) => any;
    menuItems: MenuItem[];
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
        <>
            <ArkTabs.Root defaultValue={"stats"} class={"h-full w-full overflow-hidden"}>

                <div class="bbody" style={props.display}>
                    <div class={"absolute left-[6.75%] h-[18%] object-bottom w-1/4 flex justify-start items-center"}>
                        <h2 class="pip-tab-title text-2xl">
                            {location.pathname.replace("/", "")}
                        </h2>
                    </div>

                    <div class={"absolute right-[4.5%] h-[15.5%] object-bottom w-1/4 flex justify-end items-center"}>

                        <HeaderMenu menus={props.menuItems}/>

                    </div>
                    <div id="frame" class="frame">

                        <div class="piece output container">
                            <div class="pipboy">





                                {children()}



                                <div class="piece glow noclick"></div>
                                <div class="piece scanlines noclick"></div>
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
        </>
    );
};

export default PipBoy;