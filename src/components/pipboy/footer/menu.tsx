import {Component, Show} from "solid-js";
import {useLocation} from "@solidjs/router";
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

    const componentName = () => props.componentName;

    return (
        <div class={"flex justify-center items-center space-x-0.5"}>

            <button
                type={"button"}
                onClick={() => props.onClick({
                    component: props.menus?.[0].href
                })
                }
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[0].href) ? "brightness-[150%]" : "",
                )}
            >
                <img src={props.menus?.[0].icon} class={"size-full "} alt={props.menus?.[0].name}/>
                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
            </button>
            <button
                type={"button"}
                   onClick={() => props.onClick({
                    component: props.menus?.[1].href
                })
                }
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[1].href) ? "brightness-[150%]" : "",
                )}
            >
                <img src={props.menus?.[1].icon} class={"size-full "} alt={props.menus?.[1].name}/>
                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
            </button>
            <button
                type={"button"}
                   onClick={() => props.onClick({
                    component: props.menus?.[2].href
                })
                }
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[2].href) ? "brightness-[150%]" : "",
                )}
            >
                <img src={props.menus?.[2].icon} class={"size-full "} alt={props.menus?.[2].name}/>
                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
            </button>
            <Show
                fallback={
                    <button
                        type={"button"}
                        onClick={() => props.onClick({
                            component: props.menus?.[3].href
                        })
                        }
                        class={classNames(
                            "bg-green-950",
                            "relative",
                            "size-10 md:size-8",
                            location?.pathname.includes(props.menus?.[3].href) ? "brightness-[150%]" : "",
                        )}
                    >
                        <img src={props.menus?.[3].icon} class={"size-full "} alt={props.menus?.[3].name}/>
                        <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
                    </button>

                }
                when={props.menus?.[3]?.isAlt}>
                <Drawer.Trigger
                    contextId={"activated-1"}
                    type={"button"}
                    onClick={() => props.onClick({
                        component: props.menus?.[3].href
                    })
                    }
                    class={classNames(
                        "bg-green-950",
                        "relative",
                        "size-10 md:size-8",
                         "data-open:brightness-[150%]",
                    )}
                >
                    <img src={props.menus?.[3].icon} class={"size-full "} alt={props.menus?.[3].name}/>
                    <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
                </Drawer.Trigger>

            </Show>

            <button
                type={"button"}
                   onClick={() => props.onClick({
                    component: props.menus?.[4].href
                })
                }
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[4].href) ? "brightness-[150%]" : "",
                )}>
                <img src={props.menus?.[4].icon} class={"size-full "} alt={props.menus?.[4].name}/>
                <img src={cover} class={"rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
            </button>

            <button
                type={"button"}
                   onClick={() => props.onClick({
                    component: props.menus?.[5].href
                })
                }
                class={classNames(
                    "bg-green-950 p-1.5",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[5].href) ? "brightness-[150%]" : "",
                )}
            >
                <img src={props.menus?.[5].icon} class={"size-full "} alt={props.menus?.[5].name}/>
                <img src={cover} class={"rotate-45 absolute inset-0 w-1/2 h-full"} alt={"cover"}/>
            </button>
            <button
                type={"button"}
                onClick={() => props.onClick({
                    component: props.menus?.[6].href
                })
                }
                class={classNames(
                    "bg-green-950",
                    "relative",
                    "size-10 md:size-8",
                    location?.pathname.includes(props.menus?.[6].href) ? "brightness-[150%]" : "",
                )}
            >
                <img src={props.menus?.[6].icon} class={"size-full "} alt={props.menus?.[6].name}/>
                <img src={cover} class={"rotate-45 absolute top-0 right-0 w-2/3 h-full"} alt={"cover"}/>
            </button>
        </div>
    );
};

export default FooterMenu;