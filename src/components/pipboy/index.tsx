import {Component, createEffect, createMemo, createSignal, onCleanup} from "solid-js";
import Tabs from "~/components/pipboy/tabs";
import TabContent from "~/components/pipboy/tab-content";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import ProfilesTab from "~/components/pipboy/tabs/profiles-tab";
import StatsTab from "~/components/pipboy/tabs/stats-tab";
import QuestsTab from "~/components/pipboy/tabs/quests-tab";
import BottomPipboyTabs from "~/components/bottom-pipboy-tabs";
import {MenuItem} from "~/components/bottom-pipboy-menu";
import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png";
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";


type PROPS = {
    display?: string;
}

const menuItems: MenuItem[] = [
    {name: "stats", icon: stats},
    {name: "items", icon: items},
    {name: "data", icon: data},

]

const PipBoy: Component<PROPS> = props => {
    let cursor!: HTMLDivElement;

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

                <div class="bbody z-10" style={props.display}>
                    <div class={"absolute left-[6.75%] h-[18%] object-bottom w-1/4 flex justify-start items-center"}>
                        <h2 class="pip-tab-title text-2xl">{title()}</h2>
                    </div>

                    <div class={"absolute right-[12%] h-[15.5%] object-bottom w-1/4 flex justify-end items-center"}>
                        <Tabs title={title()} setTitle={setTitle}/>
                    </div>
                    <div id="frame" class="frame">

                        <div class="piece output container">
                            <div class="pipboy">
                                <ArkTabs.List
                                    class="absolute -bottom-2 sm:bottom-2 left-0 inset-x-0 flex justify-start w-full"
                                    role="tablist">
                                    <StatsTab value={title()} setValue={setTitle}/>
                                    <ProfilesTab value={title()} setValue={setTitle}/>
                                    <QuestsTab value={title()} setValue={setTitle}/>
                                </ArkTabs.List>


                                <TabContent/>


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
                <BottomPipboyTabs onClick={(e) => setTitle(e)} appName={title()} menuItems={menuItems}/>
            </ArkTabs.Root>
        </>
    );
};

export default PipBoy;