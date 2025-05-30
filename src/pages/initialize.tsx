import {Component, createEffect, createSignal, onMount} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import Startup from "~/components/pipboy/startup";
import styles from "~/components/layouts/activated/style.module.css";
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000-monitor.png";
import ActivatedHeader from "~/components/layouts/activated/activated-header";
import ActivatedFooter from "~/components/layouts/activated/activated-footer";
import {createElementSize, useWindowSize} from "@solid-primitives/resize-observer";
import vid from "~/static/pipboy/startup/initialize_startup.mp4";


const Initialize: Component<RouteSectionProps> = props => {
    const [target, setTarget] = createSignal<HTMLElement>();
    const size = createElementSize(target);
    const navigate = useNavigate()





    let video!: HTMLVideoElement



    const playVideo = async () => {

        await video.play();
        video.addEventListener('ended', function () {
            navigate(`/dashboard`);
        });
    }



    createEffect(() => {


        console.log("width",size.width); // => number
        console.log("height",size.height); // => number

        console.log(size.height);
    });

    onMount(() => playVideo());

    return (
        <>

            <div class={styles["background"] + "min-h-dvh h-dvh flex flex-col"}>
                <div
                    style={{
                        'background-image': `url(${pbMonitor3000})`,
                        'background-repeat': 'no-repeat',
                        'background-size': '100% 100%',
                    }}
                    class={"fixed inset-0 w-full h-full z-10"}></div>
                <div class={'flex flex-row overflow-y-hidden'}>
                    <main
                        class={'h-full w-full flex flex-col'}
                    >

                        <div class={styles["interlaced"]}></div>
                        <div class={styles["glare"]}></div>
                        <div class={"h-screen flex justify-center items-center w-screen bg-black"}>
                            <div
                                ref={setTarget} class={"relative h-[49%] w-full md:w-full md:h-[76%]"}>
                                <video width={size.width} height={size.height} ref={video}>
                                    <source src={vid} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </>
    );
};

export default Initialize;