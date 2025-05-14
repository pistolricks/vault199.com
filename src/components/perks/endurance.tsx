import {Component} from "solid-js";

type PROPS = {

}

const Endurance: Component<PROPS> = props => {

    return (
        <div>
            <header class="header">
                <img src="/src/static/perks/images/ui/logo.png" alt={"logo"}/>
            </header>

            <a class="back" href="index.html">Categories</a>

            <div class="cardContainer">
                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/aquaboy.webp"/>
                    <p>Aquaboy/Aquagirl</p>
                    <ul>
                        <li class="perk-description">Immune to radiation from water and can hold breath twice as long
                        </li>
                        <li class="levelReq">Level Req:</li>
                        <li class="levelReq"><span class="levelGlow">Level 1 (rank 1)</span></li>
                        <li class="levelReq"><span class="levelGlow">Level 4 (rank 2)</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 5</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/fast-metabolism.webp"/>
                    <p>Fast Metabolism</p>
                    <ul>
                        <li class="perk-description">+1 Hit Points per rank from any source other than resting</li>
                        <li class="levelReq">Level Req:</li>
                        <li><span class="levelGlow">Level 1 (rank 1)</span></li>
                        <li><span class="levelGlow">Level 4 (rank 2)</span></li>
                        <li><span class="levelGlow">Level 7 (rank 3)</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/hunter.webp"/>
                    <p>Hunter</p>
                    <ul>
                        <li class="perk-description">Gain the Vicious damage effect against mutated mammals, lizards,
                            and insects
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/lead-belly.webp"/>
                    <p>Lead Belly</p>
                    <ul>
                        <li class="perk-description">Reduced or immunity to radiation damage from food</li>
                        <li class="levelReq">Level Req: <span class="levelGlow">Level 1</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/pathfinder.webp"/>
                    <p>Pathfinder</p>
                    <ul>
                        <li class="perk-description">Reduced travel time by half with a successful Perception + Survival
                            roll
                        </li>
                        <li class="levelReq">Level Req: <span class="levelGlow">Level 6</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>


                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/pyromaniac.webp"/>
                    <p>Pyromaniac</p>
                    <ul>
                        <li class="perk-description">Increased damage with fire-based weapons by 1d6 per rank</li>
                        <li class="levelReq">Level Req: <span class="levelGlow">Level 2</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/party-boy.webp"/>
                    <p>Party Girl/Party Boy</p>
                    <ul>
                        <li class="perk-description">Immune to alcohol addiction; gain +2 health from drinking alcohol
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 6, Charisma 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/toughness.webp"/>
                    <p>Toughness</p>
                    <ul>
                        <li class="perk-description">Increased 'Damage Resistance'</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 6, Luck 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/faster-healing.webp"/>
                    <p>Faster Healing</p>
                    <ul>
                        <li class="perk-description">1d20 can be bought for free when treating one's injuries</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 6, No robot origin</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/adamantium-skeleton.webp"/>
                    <p>Adamantium Skeleton</p>
                    <ul>
                        <li class="perk-description">Increases damage required for a critical hit to all limbs</li>
                        <li class="levelReq">Level Req:</li>
                        <li><span class="levelGlow">Level 1 (rank 1)</span></li>
                        <li><span class="levelGlow">Level 4 (rank 2)</span></li>
                        <li><span class="levelGlow">Level 7 (rank 3)</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 7</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/chem-resistant.webp"/>
                    <p>Chem Resistant</p>
                    <ul>
                        <li class="perk-description">Become immune to chem addiction</li>
                        <li class="levelReq">Level Req:</li>
                        <li><span class="levelGlow">Level 1 (rank 1)</span></li>
                        <li><span class="levelGlow">Level 5 (rank 2)</span></li>
                        <li>Other Req: <span class="perkGlow">Endurance 7</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/snakeater.webp"/>
                    <p>Snakeater</p>
                    <ul>
                        <li class="perk-description">+2 to poison damage resistance</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/solar-powered.webp"/>
                    <p>Solar Powered</p>
                    <ul>
                        <li class="perk-description">Heal radiation damage in direct sunlight</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/size-matters.webp"/>
                    <p>Size Matters</p>
                    <ul>
                        <li class="perk-description">Add 1d6 to all attacks with Heavy guns</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 7, Agility 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/rad-resistance.webp"/>
                    <p>Rad Resistance</p>
                    <ul>
                        <li class="perk-description">+1 Radiation Resistance to all limbs per rank</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Endurance 8</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>


            </div>

        </div>
    );
};

export default Endurance;