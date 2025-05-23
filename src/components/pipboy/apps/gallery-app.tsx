import {Component} from "solid-js";
import SvgDraw from "~/components/ui/gsap/svg-draw";
import FalloutNvSvg from "~/components/ui/svgs/fallout_nv_svg";

type PROPS = {}

const GalleryApp: Component<PROPS> = props => {

    return (

            <SvgDraw class={"bg-[#001423] absolute inset-0 top-11 w-screen  h-[90dvh]"}>
                <FalloutNvSvg/>
            </SvgDraw>

    );
};

export default GalleryApp;