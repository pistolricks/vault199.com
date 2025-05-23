import {Component, createMemo, createSignal, JSX} from "solid-js";
import AiCompanion from "~/components/ai-companion";
import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import radio from "~/static/app/icons/fallout/radio.png"
import streaming from "~/static/app/icons/fallout/streaming.png"
import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import vChat from "~/static/app/icons/bottom_bar/apple-app-alt-5.png"
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png"
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png"
import distorted from "~/static/images/pipboyscanlines.png"
import {classNames} from "~/components/navigation";
type PROPS = {
    onClick?: (e: string) => any;
    appName?: string;
}

const BottomPipboyMenu: Component<PROPS> = props => {

    const appName = () => props.appName;

    return (
            <div class={"fixed inset-x-0 bottom-0  h-[20dvh] flex justify-center items-center"}>
                <img src={bottomMenu2} class={"fixed z-20 -bottom-6 h-auto object-contain w-full"} alt={"bottom menu"}/>
                <div
                    class={"absolute z-20 animate-in slide-in-from-bottom animate duration-700 transition-all -translate-y-[10px]"}>

                    <button class={"absolute  rounded-full left-[2rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} type={"button"} onClick={() => props.onClick("vChat")}>
                        <img src={distorted} class={classNames(
                            appName() === "vChat" ? "opacity-50" : "opacity-10",
                            "absolute opacity-10 rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full left-[5.9rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} type={"button"} onClick={() => props.onClick("mail")}>
                        <img src={distorted} class={classNames(
                            appName() === "mail" ? "opacity-50" : "opacity-10",
                            "absolute opacity-10 rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full left-[9.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} type={"button"} onClick={() => props.onClick("contacts")}>
                        <img src={distorted} class={classNames(
                            appName() === "contacts" ? "opacity-50" : "opacity-10",
                            "absolute opacity-10 rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full right-[5.45rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} type={"button"} onClick={() => props.onClick("call")}>
                        <img src={distorted} class={classNames(
                            appName() === "call" ? "opacity-50" : "opacity-10",
                            "absolute opacity-10 rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <button class={"absolute  rounded-full right-[1.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} type={"button"} onClick={() => props.onClick("chat")}>
                        <img src={distorted} class={classNames(
                            appName() === "chat" ? "opacity-50" : "opacity-10",
                            "absolute opacity-10 rounded-full left-0 bottom-0 h-[1.9rem] w-[1.9rem]"
                        )} alt={"bottom_menu_1"}/>
                    </button>
                    <img src={bottomMenuRb} class={" h-full object-contain w-screen"} alt={"bottom_menu_1"}/>
                    <img src={vChat} class={"absolute -z-10 rounded-full left-[2rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"vChat"} />
                    <img src={mail} class={"absolute -z-10 rounded-full left-[5.9rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"mail"} />
                    <img src={contacts} class={"absolute -z-10 rounded-full left-[9.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"contacts"} />
                    <img src={call} class={"absolute -z-10 rounded-full right-[5.45rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"call"} />
                    <img src={chat} class={"absolute -z-10 rounded-full right-[1.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"chat"} />
                </div>
            </div>
    );
};

export default BottomPipboyMenu;
