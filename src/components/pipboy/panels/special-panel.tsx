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


    return (


        <div class={"relative w-full h-[90%]"}>
            <CharacterStats init={2} cnd={4} {...character()}
                            class={"absolute top-9 px-1 w-full flex justify-center items-center"}/>
            <div class={"relative top-28 bottom-10 h-full w-full"}>
                <div class={"relative flex justify-center items-center gap-0.5"}>
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
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex justify-center items-center gap-0.5"}>

                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-20deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 z-20 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 z-20 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                </div>
                <div class={"relative -mt-[6px] sm:-mt-[20px] flex justify-center items-center gap-0.5"}>

                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-20deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                    <div class={"relative w-9 h-9"}>
                        <CogSolid class={"absolute inset-0 fill-white stroke-black rotate-[-10deg] size-9"}/>
                        <div
                            class={"absolute inset-0 flex justify-center items-center text-sm"}>
                            10
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default SpecialPanel;

