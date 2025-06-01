import {Component} from "solid-js";
import {A, useLocation, useNavigate} from "@solidjs/router";
import {classNames} from "~/components/navigation";
import social from "~/static/app/icons/fallout/social.png";
import cover from "~/static/pipboy/2000N/app_cover.png";
import map from "~/static/app/icons/misc apps/30misc-apps-30.png";
import audio from "~/static/app/icons/fallout/radio.png";

type PROPS = {}

const HeaderMenu: Component<PROPS> = props => {
    const location = useLocation();
    return (
        <div class={"flex justify-center items-center space-x-0.5"}>
            <A
                href={"/contacts"}
                class={classNames(
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes('contact') ? "brightness-[200%]" : "",
                )}
            >
                <img src={social} class={"size-full"} alt={"contact"}/>
                <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
            </A>

            <A
                href={'/map'}
                class={classNames(
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes('map') ? "brightness-[200%]" : "",
                )}>
                <img src={map} class={"size-full"} alt={"misc"}/>
                <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
            </A>

            <A
                href={"/media"}
                class={classNames(
                    "relative",
                    "size-10 md:size-8 rounded-tr-xl",
                    location?.pathname.includes('media') ? "brightness-[200%]" : "",
                )}
            >
                <img src={audio} class={"size-full rounded-tr-xl"} alt={"audio"}/>
                <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
            </A>
        </div>
    );
};

export default HeaderMenu;