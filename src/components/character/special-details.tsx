import {Component, createEffect, For} from "solid-js";
import {ICharacter} from "~/components/character/config";
import agilityGif from "~/static/gifs/special/agility.gif"
import charismaGif from "~/static/gifs/special/charisma.gif"
import enduranceGif from "~/static/gifs/special/endurance.gif"
import intelligenceGif from "~/static/gifs/special/intelligence.gif"
import luckGif from "~/static/gifs/special/luck.gif"
import perceptionGif from "~/static/gifs/special/perception.gif"
import strengthGif from "~/static/gifs/special/strength.gif"

type PROPS = {
    data: {
        name: string;
        character: ICharacter;
    }
};

const SpecialDetails: Component<PROPS> = props => {

    const name = () => props.data.name;
    const character = () => props.data.character;

    const gifs = {
        agility: agilityGif,
        charisma: charismaGif,
        endurance: enduranceGif,
        intelligence: intelligenceGif,
        luck: luckGif,
        perception: perceptionGif,
        strength: strengthGif,
    }

    createEffect(() => {
        console.log(character(), "character")
        console.log(name(), "name")
    })

    return (
        <div class={"border-b border-[rgb(var(--main))] text-[rgb(var(--main))] p-4"}>


            <img src={gifs[name()]} class={"w-full"} alt={""}/>

            <div>
                <ul class="info-table">
                    <li class="vboy-wrap"></li>
                    <li class={"uppercase"}>
                        <b>Name</b>
                        {name()}
                    </li>

                    <li>
                        <b>CND</b>{" "}
                        <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
                    </li>
                </ul>
                <p class="extra"
                   style={{'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '20dvh'}}>

                </p>
            </div>

        </div>

    );
};

export default SpecialDetails;