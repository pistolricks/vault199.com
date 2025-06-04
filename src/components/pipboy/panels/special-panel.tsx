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



        </div>


    );
};

export default SpecialPanel;

