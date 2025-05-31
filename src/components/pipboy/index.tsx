import {Component, createEffect, createMemo, createSignal, onCleanup} from "solid-js";
import Tabs from "~/components/pipboy/tabs";
import TabContent from "~/components/pipboy/tab-content";
import {Tabs as ArkTabs} from "@ark-ui/solid";
import RadioTab from "~/components/pipboy/tabs/radio-tab";
import ProfilesTab from "~/components/pipboy/tabs/profiles-tab";
import StatsTab from "~/components/pipboy/tabs/stats-tab";
import QuestsTab from "~/components/pipboy/tabs/quests-tab";
import bottomMenuAlt from "~/static/pipboy/2000N/pb2000uib.png";
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000-monitor.png";


type PROPS = {
    display?: string;
}


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
                <Tabs title={title()} setTitle={setTitle}/>
                <div class="bbody z-10" style={props.display}>


                    <div id="frame" class="frame">
                        <div class="piece output container">
                            <div class="pipboy">
                                <ArkTabs.List
                                    class="absolute bottom-0 sm:bottom-2 left-2 inset-x-0 flex justify-start w-full space-x-[10px]"
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
            </ArkTabs.Root>
        </>
    );
};

export default PipBoy;