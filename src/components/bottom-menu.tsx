import {createBreakpoints} from "@solid-primitives/media";
// import navigation from "~/static/app/icons/bottom_bar/apple-app-alt-18.png"
// import profile from "~/static/app/icons/bottom_bar/apple-app-alt-23.png"
// import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
// import drawer from "~/static/app/icons/bottom_bar/apple-app-alt-26.png"
import bottom from "~/static/pipboy/Main_White/Fallout - Main (White)/Bottom.png"
import sat from "~/static/app/icons/bottom_bar/browser.png"
import Drawer from "@corvu/drawer";
import {createEffect} from "solid-js";

export default function BottomMenu(props: {
    onClick: (e: string) => any
}) {

    const breakpoints = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
    };


    const matches = createBreakpoints(breakpoints);

    createEffect(() => {
        console.log(matches.sm); // true when screen width >= 640px
        console.log(matches.md);
        console.log(matches.lg); // true when screen width >= 1024px
        console.log(matches.xl); // true when screen width >= 1280px
        console.log(matches.xxl);
    });


    return (

        <>
            <div class={"absolute z-20 bottom-24 sm:bottom-32 right-5 sm:right-10 w-full flex justify-center items-center gap-x-5 sm:gap-x-8"}>
                {/*
            <Drawer.Trigger style={{
                width: matches?.sm ? '58px':'37px',
            }} class="absolute left-[10%]" onClick={() => props.onClick("navigation")} contextId={"activated-1"}  >
                <img src={navigation} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full" alt={"navigation"}/>
            </Drawer.Trigger>
            <Drawer.Trigger style={{
                width: matches?.sm ? '58px':'37px',

            }} class="absolute left-[5.8rem]" onClick={() => props.onClick("chat")} contextId={"activated-1"}  >
                <img src={chat} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full" alt={"chat"}/>
            </Drawer.Trigger>
            <Drawer.Trigger style={{
                width: matches?.sm ? '58px':'37px',

            }} class="absolute left-[9.6rem]" onClick={() => props.onClick("drawer")} contextId={"activated-1"}  >
                <img src={drawer} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full" alt={"drawer"}/>
            </Drawer.Trigger>
            <Drawer.Trigger style={{
                width: matches?.sm ? '58px':'37px',

            }} class="absolute right-[5.4rem]" onClick={() => props.onClick("profile")} contextId={"activated-1"}  >
                <img src={profile} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full" alt={"profile"}/>
            </Drawer.Trigger>
            */}
                <Drawer.Trigger style={{
                    width: matches?.sm ? '58px' : '37px',
                }} class="absolute z-10 right-[1.54rem]" onClick={() => props.onClick("sat")} contextId={"activated-1"}>
                    <img src={sat} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full"
                         alt={"sat"}/>
                </Drawer.Trigger>
            </div>

            <img src={bottom} class={"absolute bottom-0 w-full -z-0 object-contain"} alt={"bottom"}/>
        </>
    );
}