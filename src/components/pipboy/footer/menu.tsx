import {Component, For, Match, Switch} from "solid-js";
import {A, useLocation} from "@solidjs/router";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";
import {MenuItem} from "~/lib/types";
import Drawer from "@corvu/drawer";


type PROPS = {
    menus: MenuItem[];
    componentName?: string;
    onClick?: (e?: any) => any;


}

const FooterMenu: Component<PROPS> = props => {
    const location = useLocation();

    const menus = () => props.menus;
    const componentName = () => props.componentName;

    return (
        <div class={"swiper-slide flex justify-center items-center space-x-0.5"}>
            <For each={menus()}>
                {(item, i) => (
                    <Switch>
                        <Match when={props.menus?.[i()]?.isAlt === false}>
                            <button
                                type={"button"}
                                onClick={() => props.onClick(props.menus?.[i()])
                                }
                                class={classNames(
                                    componentName() === props.menus?.[i()]?.href ? "brightness-[200%]" : "",
                                    "bg-green-950",
                                    "relative",
                                    "size-10 md:size-8",
                                )}
                            >
                                <img src={props.menus?.[i()].icon} class={"size-full "} alt={props.menus?.[i()].name}/>
                                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
                            </button>
                        </Match>
                        <Match when={props.menus?.[i()]?.isAlt === true}>
                            <Drawer.Trigger
                                contextId={"activated-1"}
                                type={"button"}
                                onClick={() => props.onClick(props.menus?.[i()])
                                }
                                class={classNames(
                                    "bg-green-950",
                                    "relative",
                                    "size-10 md:size-8",
                                    componentName() === props.menus?.[i()]?.href ? "data-open:brightness-[200%]" : "",
                                )}
                            >
                                <img src={props.menus?.[i()].icon} class={"size-full "} alt={props.menus?.[i()].name}/>
                                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
                            </Drawer.Trigger>
                        </Match>
                        <Match when={!props.menus?.[i()]?.isAlt}>
                            <A
                                class={classNames(
                                    "bg-green-950",
                                    "relative",
                                    "size-10 md:size-8",
                                )}
                                href={props.menus?.[i()].href}>
                                <img src={props.menus?.[i()].icon} class={classNames(
                                    location?.pathname.includes(props.menus?.[i()].name) ? "brightness-[200%]" : "",
                                    "size-full"
                                )} alt={props.menus?.[i()].name}/>
                                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
                            </A>
                        </Match>
                    </Switch>
                )}
            </For>

        </div>
    );
};

export default FooterMenu;