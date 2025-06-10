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


type PROPS = {
    character: ICharacter
}



const SpecialPanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;


    const character = () => props.character;


    return (


        <div class={"relative w-full h-[90%]"}>
            <StatsData init={2} cnd={4} { ...character()} class={"absolute top-9 px-1 w-full flex justify-center items-center"}/>
            <div class={"absolute top-10 bottom-0 h-full w-full flex justify-center items-center"}>

            </div>
        </div>


    );
};

export default SpecialPanel;


const StatsData: Component<ICharacter & { class?: string, init: number, cnd: number }> = (props) => {
    const className = () => props.class;

    const att = () => props.stats?.meleeDamage ?? 0;
    const def = () => props.stats?.healthPoints ?? 0;
    const init = () => props.init ?? 0;
    const wg = () => props.stats?.carryWeight ?? 0;
    const inv = () => props.inventory;
    const cnd = () => props.cnd;
    const exp = () => props.stats?.exp ?? 0;



    return (
        <div class={className()}>
            <div class={"w-full flex flex-col"}>

                <ul class="info-table grid grid-cols-3 gap-1 uppercase">
                    <li class="clear">
                        <b>att</b>
                        {att()}
                    </li>
                    <li>
                        <b>def</b>
                        {def()}
                    </li>
                    <li>
                        <b>init</b>
                        {init()}
                    </li>
                    <li class="clear">
                        <span class="fade-a">
                        <b>wg</b>
                            {wg()}
                        </span>
                        <span class="fade-b">
                      <b>wg</b>
                            {wg()}
                        </span>
                    </li>
                    <li class="clear">
                        <b>arm</b>{" "}
                        <span class="condition">
                         <span class="fill" style={{
                             width: cnd() + "px"
                         }}></span>
                       </span>
                    </li>
                    <li>
                        <b>exp</b>
                        {exp()}
                    </li>
                </ul>
            </div>
        </div>
    );
}