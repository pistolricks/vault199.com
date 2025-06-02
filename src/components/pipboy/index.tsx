import {Component, createEffect, createMemo, createSignal, JSXElement, onCleanup, Setter, Show} from "solid-js";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";
import HeaderMenu from "~/components/pipboy/header/menu";
import {useLocation} from "@solidjs/router";
import {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import BottomPipboyRoutingMenu from "~/components/pipboy/footer/bottom-pipboy-routing-menu";
import bgLines from "~/static/backgrounds/pipboyscanlines.png"
type PROPS = {
    display?: string;
    setComponent: Setter<string>;
    onClick?: (e) => any;
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
        <>
            <ArkTabs.Root defaultValue={"stats"} class={"h-full w-full overflow-hidden"}>

                <div class="bbody" style={props.display}>
                    <div
                        class={"absolute left-[6.75%] sm:left-[8%] md:left-10% h-[18%] object-bottom w-1/4 flex justify-start items-center"}>
                        <Show
                            fallback={
                                <h2 class="pip-tab-title text-xl flex flex-col">
                                    <span class={"text-xs/2"}>{location.pathname.split("/")[2] ? location.pathname.split("/")[1].replaceAll("/", "") : ""}</span>
                                    <span>{location.pathname.split("/")[2] ? location.pathname.split("/")[2].replaceAll("/", "") : location.pathname.replaceAll("/", "")}</span>
                                </h2>
                            }
                            when={location.pathname.includes("dashboard")}>
                            <></>
                        </Show>

                    </div>

                    <Show when={props.menuItems?.length > 0}>
                    <div class={"absolute right-[5.8%] sm:right-[8%] h-[16%] object-bottom w-1/4 flex justify-end items-center"}>
                        <HeaderMenu menus={props.menuItems}/>
                    </div>
                    </Show>
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