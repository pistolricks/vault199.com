import {Component, createEffect, onMount} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import vid from "~/static/pipboy/startup/initialize_startup.mp4"
import {createBreakpoints} from "@solid-primitives/media";
import { useWindowSize } from "@solid-primitives/resize-observer";



type PROPS = {}



const Startup: Component<{
    path: string;
}> = props => {
    const navigate = useNavigate()





    let video!: HTMLVideoElement



    const playVideo = async () => {

        await video.play();
        video.addEventListener('ended', function () {
            navigate(`/${props.path}`);
        });
    }

    onMount(() => playVideo());
    return (

            <video ref={video}>
                <source src={vid} type="video/mp4" />
            </video>

    );
};

export default Startup;