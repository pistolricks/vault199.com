import {Component} from "solid-js";
import AiCompanion from "~/components/ai-companion";
import codsWorth from "~/static/app/Codsworth_model.webp"
import bottomMenu from "~/static/pipboy/bottom/bottom_menu.png"
import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import staticImage from "~/static/app/icons/bottom_bar/apple-app-alt-11.png"
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
                </div>
            </div>
        </div>



    );
};

export default SatApp;