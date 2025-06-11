import {Component} from "solid-js";
import {A, useLocation, useNavigate} from "@solidjs/router";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";
import {MenuItem} from "~/lib/types";
import {start} from "~/lib/geo";


type PROPS = {
    menus: MenuItem[];
}

const HeaderMenu: Component<PROPS> = props => {
    const location = useLocation();
    return (
        <div class={"flex justify-center items-center space-x-0.5"}>
            <A
                href={props.menus?.[0].href}
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[0].href) ? "brightness-[200%]" : "",
                    props.menus?.[0].class
                )}
            >
                <img src={props.menus?.[0].icon} class={"size-full"} alt={props.menus?.[0].name}/>
                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
            </A>

            <A
                href={props.menus?.[1].href}
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[1].href) ? "brightness-[200%]" : "",
                    props.menus?.[1].class,
                )}>
                <img src={props.menus?.[1].icon} class={"size-full"} alt={props.menus?.[1].name}/>
                <img src={cover} class={"rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
            </A>

            <A
                href={props.menus?.[2].href}
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[2].href) ? "brightness-[200%]" : "",
                    props.menus?.[2].class,
                )}
            >
                <img src={props.menus?.[2].icon} class={"size-full"} alt={props.menus?.[2].name}/>
                <img src={cover} class={"rotate-45 absolute inset-0 w-1/2 h-full"} alt={"cover"}/>
            </A>
        </div>
    );
};

export default HeaderMenu;