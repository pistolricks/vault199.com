import {Component, createEffect, createMemo} from "solid-js";
import {classNames} from "~/components/navigation";
import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";

import strength from "~/static/special/strength.webp"
import strength1 from "~/static/special/1_strength.webp"
import perception2 from "~/static/special/2_perception.webp"
import endurance3 from "~/static/special/3_endurance.webp"
import charisma4 from "~/static/special/4_charisma.webp"
import intelligence5 from "~/static/special/5_intelligence.webp"
import agility6 from "~/static/special/6_agility.webp"
import luck7 from "~/static/special/7_luck.webp"
import perception from "~/static/special/perception.webp"
import endurance from "~/static/special/endurance.png"
import charisma from "~/static/special/charisma.webp"
import intelligence from "~/static/special/intelligence.webp"
import agility from "~/static/special/agility.webp"
import luck from "~/static/special/luck.webp"
import CharacterStats from "~/components/character/character-stats";
import Cog from "~/static/app/svgs/map/cog.svg?component-solid"
import CogSolid from "~/static/app/svgs/map/cog-solid.svg?component-solid"

type PROPS = {
    character: ICharacter
}


const SpecialPanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;


    const character = () => props.character;


    const special = createMemo(() => character()?.special)

    return (


        <div class={"relative w-full h-[90%]"}>
            <CharacterStats init={2} cnd={4} {...character()}
                            class={"absolute top-9 px-1 w-full flex justify-center items-center"}/>
            <div class={"relative top-10 bottom-10 h-full w-full flex justify-between sm:justify-center sm:gap-x-10 items-center"}>
                <div class={"relative flex flex-col items-center gap-0.5 px-2"}>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${strength})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${perception})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${endurance})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>

                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${charisma})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",
                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>

                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${intelligence})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>

                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${agility})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>

                    </div>
                    <div class={"relative w-9 h-9"}>
                        <div
                            style={{
                                'background-image': `url(${luck})`,
                                'background-size': "contain",
                                'background-repeat': "no-repeat",
                                'background-position': "center",
                                'background-color': "transparent",

                            }}
                            class={"absolute inset-1 z-30 rounded-full flex justify-center items-center"}/>
                        <Cog class={"absolute inset-0 z-30 fill-white stroke-black rotate-[-10deg] size-9"}/>

                    </div>
                </div>
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex flex-col items-center gap-0.5"}>

                    <div
                        style={{
                            'background-image': `url(${strength1})`,
                            'background-size': "contain",
                            'background-repeat': "no-repeat",
                            'background-position': "center",
                            'background-color': "transparent",

                        }}
                        class={"relative w-32 h-9"}>

                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            STRENGTH
                        </div>
                    </div>
                    <div style={{
                        'background-image': `url(${perception2})`,
                        'background-size': "contain",
                        'background-repeat': "no-repeat",
                        'background-position': "center",
                        'background-color': "transparent",

                    }}
                         class={"relative w-32 h-9"}>

                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Perception
                        </div>
                    </div>
                    <div style={{
                        'background-image': `url(${endurance3})`,
                        'background-size': "contain",
                        'background-repeat': "no-repeat",
                        'background-position': "center",
                        'background-color': "transparent",

                    }}
                         class={"relative w-32 h-9"}>

                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Endurance
                        </div>
                    </div>
                    <div style={{
                        'background-image': `url(${charisma4})`,
                        'background-size': "contain",
                        'background-repeat': "no-repeat",
                        'background-position': "center",
                        'background-color': "transparent",

                    }}
                         class={"relative w-32 h-9"}>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Charisma
                        </div>
                    </div>
                    <div
                        style={{
                            'background-image': `url(${intelligence5})`,
                            'background-size': "contain",
                            'background-repeat': "no-repeat",
                            'background-position': "center",
                            'background-color': "transparent",

                        }}
                        class={"relative w-32 h-9"}>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Intelligence
                        </div>
                    </div>
                    <div style={{
                        'background-image': `url(${agility6})`,
                        'background-size': "contain",
                        'background-repeat': "no-repeat",
                        'background-position': "center",
                        'background-color': "transparent",

                    }}
                         class={"relative w-32 h-9"}>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Agility
                        </div>
                    </div>
                    <div   style={{
                        'background-image': `url(${luck7})`,
                        'background-size': "contain",
                        'background-repeat': "no-repeat",
                        'background-position': "center",
                        'background-color': "transparent",

                    }}
                           class={"relative w-32 h-9"}>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm uppercase"}>
                            Luck
                        </div>
                    </div>
                </div>
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex flex-col items-center gap-0.5"}>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-20deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.strength?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.perception?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.endurance?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.charisma?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.intelligence?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.agility?.base}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.luck?.base}
                        </div>
                    </div>
                </div>
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex flex-col items-center gap-0.5"}>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-20deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.strength?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.perception?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.endurance?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.charisma?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.intelligence?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.agility?.change}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            {special()?.luck?.change}
                        </div>
                    </div>

                </div>
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex flex-col items-center gap-0.5"}>

                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-20deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.strength?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.perception?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.endurance?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.charisma?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.intelligence?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.agility?.total}
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-black stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                           {special()?.luck?.total}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default SpecialPanel;

