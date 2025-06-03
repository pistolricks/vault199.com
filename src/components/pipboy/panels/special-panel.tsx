import {Component, createEffect} from "solid-js";
import {classNames} from "~/components/navigation";
import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";

import strength from "~/static/special/strength.webp"
import perception from "~/static/special/perception.webp"
import endurance from "~/static/special/endurance.png"
import charisma from "~/static/special/charisma.webp"
import intelligence from "~/static/special/intelligence.webp"
import agility from "~/static/special/agility.webp"
import luck from "~/static/special/luck.webp"


type PROPS = {}


const SpecialPanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;


    createEffect(() => {
        console.log("initial", getInitialCharacter());
        console.log("field", getConfigByField("endurance"));
    })


    return (


        <div class={"relative w-full h-[90%]"}>




            <div class={"absolute top-10 bottom-0 h-full w-full flex justify-center items-center"}>



            </div>
            <ul class={"absolute bottom-0 px-1 w-full flex justify-center items-center"}>
                <li class={"w-1/5"}>
                    <img src={strength} class={"w-full h-full object-contain"} alt={"strength"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={perception} class={"w-full h-full object-contain"} alt={"perception"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={endurance} class={"w-full h-full object-contain"} alt={"endurance"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={charisma} class={"w-full h-full object-contain"} alt={"charisma"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={intelligence} class={"w-full h-full object-contain"} alt={"intelligence"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={agility} class={"w-full h-full object-contain"} alt={"agility"}/>
                </li>
                <li class={"w-1/5"}>
                    <img src={luck} class={"w-full h-full object-contain"} alt={"luck"}/>
                </li>
            </ul>


        </div>


    );
};

export default SpecialPanel;

