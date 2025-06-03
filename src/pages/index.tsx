import {Component} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import SvgDraw from "~/components/ui/gsap/svg-draw";
import FalloutNvSvg from "~/components/ui/svgs/fallout_nv_svg";


const Home: Component<RouteSectionProps> = (props) => {


    return (

        <TerminalLayout {...props} >

        </TerminalLayout>

    );
}

export default Home;