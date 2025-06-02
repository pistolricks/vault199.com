import {createBreakpoints} from "@solid-primitives/media";
// import navigation from "~/static/app/icons/bottom_bar/apple-app-alt-18.png"
// import profile from "~/static/app/icons/bottom_bar/apple-app-alt-23.png"
// import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
// import drawer from "~/static/app/icons/bottom_bar/apple-app-alt-26.png"
import bottom from "~/static/pipboy/Main_White/Fallout - Main (White)/Bottom.png"
import sat from "~/static/app/icons/fallout/tech.png"
import Drawer from "@corvu/drawer";
import {createEffect} from "solid-js";
import ProgressBar from "~/components/ui/progress";

export default function BottomMenu(props: {
    onClick: (e: string) => any
}) {





    return (

        <>
            <div class={" h-full w-full"}>
                <ProgressBar value={50}/>
            </div>


        </>
    );
}