import {Component, createSignal, lazy, onCleanup, onMount} from "solid-js";
import SvgDraw from "~/components/ui/gsap/svg-draw";
import FalloutNv from "~/components/ui/svgs/fallout_nv_svg";
import FalloutNvSvg from "~/components/ui/svgs/fallout_nv_svg";
import UpdatingLayout from "~/components/layouts/updating/updating-layout";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import vid from "~/static/pipboy/startup/initialize_startup.mp4"
import Agility from "~/components/perks/agility";
import ActivatePipboy from "~/components/pipboy/activate-pipboy";

type PROPS = {}

const Dashboard: Component<RouteSectionProps> = props => {


    return (
        <ActivatedLayout {...props}>

        </ActivatedLayout>
    );
};

export default Dashboard;