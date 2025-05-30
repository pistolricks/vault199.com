import {Component, createEffect, onCleanup} from "solid-js";
import Tabs from "~/components/pipboy/tabs";
import TabContent from "~/components/pipboy/tab-content";
import {Tabs as ArkTabs} from "@ark-ui/solid";

type PROPS = {
    display?: string;
}


const PipBoy: Component<PROPS> = props => {
    let cursor!: HTMLDivElement;

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

    return (
        <div class="bbody z-10" style={props.display}>
            <div id="frame" class="frame">
                <div class="piece output container">
                    <div class="pipboy">
                        <ArkTabs.Root class={"h-full w-full overflow-hidden"}>
                            <Tabs/>
                            <TabContent/>
                        </ArkTabs.Root>
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
    );
};

export default PipBoy;