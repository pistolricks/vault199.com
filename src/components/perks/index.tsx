import {Component} from "solid-js";

type PROPS = {}

const Perks: Component<PROPS> = props => {

    return (
        <div>
            <header class="header">
                <img src="images/logo.png"/>
            </header>

            <div class="wrapper">
                <a class="perk" href="strength.html">Strength</a>
                <a class="perk" href="perception.html">Perception</a>
                <a class="perk" href="endurance.html">Endurance</a>
                <a class="perk" href="charisma.html">Charisma</a>
                <a class="perk" href="intelligence.html">Intelligence</a>
                <a class="perk" href="agility.html">Agility</a>
                <a class="perk" href="luck.html">Luck</a>
            </div>

        </div>
    );
};

export default Perks;