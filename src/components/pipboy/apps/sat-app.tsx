import {Component} from "solid-js";
import AiCompanion from "~/components/ai-companion";
import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import radio from "~/static/app/icons/fallout/radio.png"
import streaming from "~/static/app/icons/fallout/streaming.png"
import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import vChat from "~/static/app/icons/bottom_bar/apple-app-alt-5.png"
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png"
import contact from "~/static/app/icons/bottom_bar/apple-app-alt-25.png"
type PROPS = {
    data: {
        name: string;
    };
}

const SatApp: Component<PROPS> = props => {

    const name = () => props.data?.name ?? "mrhandy";

    return (

        <div class={"flex justify-center items-center absolute inset-0 h-screen w-screen"}>
            <div class={"flex flex-col justify-center items-center "}>

            <AiCompanion name={name()}/>
            </div>


            <div class={"fixed inset-x-0 bottom-0  h-[20dvh] flex justify-center items-center"}>
                <img src={bottomMenu2} class={"fixed z-20 -bottom-6 h-auto object-contain w-full"} alt={"bottom menu"} />
                <div class={"absolute z-20 animate-in slide-in-from-bottom animate duration-700 transition-all -translate-y-[10px]"}>

                <img src={bottomMenuRb} class={" h-full object-contain w-screen"} alt={"bottom_menu_1"} />
                    <img src={vChat} class={"absolute -z-10 rounded-full left-[2rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"vChat"} />
                    <img src={mail} class={"absolute -z-10 rounded-full left-[5.9rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"mail"} />
                    <img src={contact} class={"absolute -z-10 rounded-full left-[9.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"contact"} />
                    <img src={call} class={"absolute -z-10 rounded-full right-[5.45rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"call"} />
                    <img src={chat} class={"absolute -z-10 rounded-full right-[1.7rem] bottom-[2.12rem] h-[1.9rem] w-[1.9rem]"} alt={"chat"} />
                </div>
            </div>
        </div>



    );
};

export default SatApp;