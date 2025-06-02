import {Component} from "solid-js";
import bottom from "~/static/pipboy/bottom/bottom.png"
import bottomMenu1 from "~/static/pipboy/bottom/bottom_menu_1.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import BaseDock from "~/components/base-dock";
type PROPS = {
    onClick?: (e: string) => any;
}

const BottomMenuWrapper: Component<PROPS> = props => {

    return (
        <div class={"fixed inset-x-0 bottom-0  h-[20dvh] flex justify-center items-center"}>
            <img src={bottom} class={"fixed z-20 -bottom-2 max-w-sm animate duration-700 transition-all translate-y-[10px] object-contain w-full"} alt={"bottom menu"} />
            <img src={bottomMenu2} class={"fixed z-20 bottom-0 h-24  max-w-xs  w-full"} alt={"bottom menu"} />

            <div class={"absolute z-20 animate-in slide-in-from-bottom animate duration-700 transition-all  sm:max-w-xs -translate-y-[5px] sm:opacity-80"}>
                <img src={bottomMenu1} class={"h-full  object-contain w-screen"} alt={"bottom_menu_1"} />

                <BaseDock onClick={props.onClick} />
            </div>
        </div>
    );
};

export default BottomMenuWrapper;