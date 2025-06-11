import {Component, createEffect, For} from "solid-js";
import {ICharacter} from "~/components/character/config";
import agilityGif from "~/static/gifs/special/agility.gif"
import charismaGif from "~/static/gifs/special/charisma.gif"
import enduranceGif from "~/static/gifs/special/endurance.gif"
import intelligenceGif from "~/static/gifs/special/intelligence.gif"
import luckGif from "~/static/gifs/special/luck.gif"
import perceptionGif from "~/static/gifs/special/perception.gif"
import strengthGif from "~/static/gifs/special/strength.gif"
import BottomPipboyMenu, {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import left from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png";
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png";
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png";
import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png";

type PROPS = {
    data: {
        name: string;
        character: ICharacter;
    }
};

const menuItems: MenuItem[] = [
    {name: "left", icon: left},
    {name: "mail", icon: mail},
    {name: "center", icon: contacts},
    {name: "call", icon: call},
    {name: "right", icon: right},
]

const gifs = {
    agility: agilityGif,
    charisma: charismaGif,
    endurance: enduranceGif,
    intelligence: intelligenceGif,
    luck: luckGif,
    perception: perceptionGif,
    strength: strengthGif,
}

const SpecialDetails: Component<PROPS> = props => {

    const name = () => props.data.name;
    const character = () => props.data.character;




    const handleCommunications = (app: string) => {
        console.log(app)

    }



    createEffect(() => {
        console.log(character(), "character")
        console.log(name(), "name")
    })

    return (
        <div class={"text-[rgb(var(--main))] p-4"}>

            <div class={"flex justify-center items-center"}>
            <img src={gifs[name()]} class={"size-1/2 aspect-square"} alt={""}/>
            </div>
            <div>
                <ul class="info-table">
                    <li class="vboy-wrap"></li>
                    <li class={"uppercase"}>
                        <b>Name</b>
                        {name()}
                    </li>

                    <li>
                        <b>RANK</b>
                        {character().special?.[name()]?.total}
                    </li>
                </ul>
                <p class="extra"
                   style={{'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '20dvh'}}>

                </p>
            </div>
            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={""}/>
        </div>

    );
};

export default SpecialDetails;