import {Component, createMemo} from "solid-js";
import SvgDraw from "~/components/ui/gsap/svg-draw";
import FalloutNvSvg from "~/components/ui/svgs/fallout_nv_svg";
import pbMonitor2000 from "~/static/pipboy/2000N/pb2000_monitor_alt.png";
import BottomPipboyMenu from "~/components/pipboy/footer/bottom-pipboy-menu";
import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png";
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png";
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png";
import left from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import {MenuItem} from "~/lib/types";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "left", icon: left},
    {name: "mail", icon: mail},
    {name: "contacts", icon: contacts},
    {name: "call", icon: call},
    {name: "right", icon: right},
]

const GalleryApp: Component<PROPS> = props => {


    const handleCommunications = (app: string) => {
        console.log(app)


    }

    const communications = createMemo(() => "")


    return (
        <div class={"relative h-full w-full"}>
            <div class={"flex justify-center items-center h-full w-full"}>
                <SvgDraw width={'70%'} height={'80%'} class={"bg-black  aspect-square"}>
                    <FalloutNvSvg/>
                </SvgDraw>

            </div>

            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>
        </div>
    );
};

export default GalleryApp;