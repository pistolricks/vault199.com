import {Component} from "solid-js";

type PROPS = {}

const Perception: Component<PROPS> = props => {

    return (
        <div>
            <header class="header">
                <img src="/src/static/perks/images/ui/logo.png" alt={"logo"}/>
            </header>

            <a class="back" href="index.html">Categories</a>

            <div class="cardContainer">

                <div class="cardContainer">
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/ghost.webp"/>
                        <p>Ghost</p>
                        <ul>
                            <li class="perk-description">Sneak tests in darkness allow for one free additional d20</li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 5, Agility 6</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/demolition-expert.webp"/>
                        <p>Demolition Expert</p>
                        <ul>
                            <li class="perk-description">Gain the Vicious quality with weapons that have the Blast
                                quality and unlock additional explosive recipes
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 6, Luck 6</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/refractor.webp"/>
                        <p>Refractor</p>
                        <ul>
                            <li class="perk-description">+1 Energy Resistance for all limbs per rank</li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 6, Luck 7</span></li>
                            <li>Ranks: 2</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/awareness.webp"/>
                        <p>Awareness</p>
                        <ul>
                            <li class="perk-description">Using the Aim minor action, gain +1 pierce or add 1 to a
                                piercing effect of the used weapon
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 7</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/night-person.webp"/>
                        <p>Night Person</p>
                        <ul>
                            <li class="perk-description">Difficulty increases due to darkness are reduced by 1</li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 7</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/cautious-nature.webp"/>
                        <p>Cautious Nature</p>
                        <ul>
                            <li class="perk-description">Re-roll 1d20 on tests if action points were spent</li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req:</li>
                            <li><span class="perkGlow">Perception 7, Daring Nature not taken</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/infiltrator.webp"/>
                        <p>Infiltrator</p>
                        <ul>
                            <li class="perk-description">Re-roll 1d20 on Lockpick skill tests</li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 8</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/laser-commander.webp"/>
                        <p>Laser Commander</p>
                        <ul>
                            <li class="perk-description">Increase damage with ranged energy weapons by 1d6 per rank</li>
                            <li class="levelReq">Level Req: <span class="levelGlow">Level 2</span></li>
                            <li>Other Req: <span class="perkGlow">Perception 8</span></li>
                            <li>Ranks: 2</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/concentrated-fire.webp"/>
                        <p>Concentrated Fire</p>
                        <ul>
                            <li class="perk-description">Allowed to re-roll 3d6 after spending additional ammunition to
                                increase damage
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 8, Agility 6</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/sniper.webp"/>
                        <p>Sniper</p>
                        <ul>
                            <li class="perk-description">Taking the Aim minor action and making a ranged attack with a
                                two-handed weapon with the Accurate quality, specify a hit location to target without
                                increasing the difficulty
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 8, Agility 6</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/pickpocket.webp"/>
                        <p>Pickpocket</p>
                        <ul>
                            <li class="perk-description">Rank 1: Ignore first complication of Agility + Sneak test</li>
                            <li class="perk-description">Rank 2: May re-roll 1d20 on attempts to pickpocket</li>
                            <li class="perk-description">Rank 3: Reduce difficulty by 1 when attempting a pickpocket
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 8, Agility 8</span></li>
                            <li>Ranks: 3</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/master-thief.webp"/>
                        <p>Master Thief</p>
                        <ul>
                            <li class="perk-description">+1 to opponent detection tests to notice picking a lock or
                                pickpocket
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 8, Agility 9</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>
                    <div class="cardItem button">
                        <div class="closeContainer">
                            <button class="close">x</button>
                        </div>
                        <img src="/src/static/perks/images/ui/meltdown.webp"/>
                        <p>Meltdown</p>
                        <ul>
                            <li class="perk-description">Enemies explode and cause damage to one additional enemy in
                                close range
                            </li>
                            <li class="levelReq">Level Req: None</li>
                            <li>Other Req: <span class="perkGlow">Perception 10</span></li>
                            <li>Ranks: 1</li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Perception;