import {Component} from "solid-js";

type PROPS = {

}

const Charisma: Component<PROPS> = props => {

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
                    <img src="/src/static/perks/images/ui/cap-collector.png" class="imgFix"/>
                    <p>Cap Collector</p>
                    <ul>
                        <li class="perk-description">Decreased buying and increased selling prices by 10%</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 5</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/zac.jpg" class="zac"/>
                    <p>Dogmeat</p>
                    <ul>
                        <li class="perk-description">The faithful canine companion Dogmeat</li>
                        <li class="perk-description">He's a very good boy with strong legs</li>
                        <li class="perk-description">Comes with a cute lil suit</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 5</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/animal-friend.webp" class="zac"/>
                    <p>Animal Friend</p>
                    <ul>
                        <li class="perk-description">Rank 1: Hostile animals may roll to not attack you</li>
                        <li class="perk-description">Rank 2: Gain the pacify animals major action, affecting:</li>
                        <li class="perk-description">Blood bug, Bloatfly, Brahmin, Deathclaw, Dog, Mole rat, Mutant
                            hound,
                            Radroach, Radstag, Stingwing, Yao Guai
                        </li>
                        <li class="levelReq">Level Req:</li>
                        <li><span class="levelGlow">Level 1 (rank 1)</span></li>
                        <li><span class="levelGlow">Level 6 (rank 2)</span></li>
                        <li>Other Req: <span class="perkGlow">Charisma 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/black-widow.webp" class="zac"/>
                    <p>Black Widow/Lady Killer</p>
                    <ul>
                        <li class="perk-description">Re-roll 1d20 on Charisma checks to influence NPCs.
                            Additionally, inflict 1d6 of damage to the opposite gender
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/smooth-talker.webp" class="zac"/>
                    <p>Smooth Talker</p>
                    <ul>
                        <li class="perk-description">Re-roll 1d20 on opposed tests involving Barter or Speech</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/scoundrel.webp" class="zac"/>
                    <p>Scoundrel</p>
                    <ul>
                        <li class="perk-description">Ignore the first complication rolled in Charisma + Speech checks
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/inspirational.webp" class="zac"/>
                    <p>Inspirational</p>
                    <ul>
                        <li class="perk-description">Increase maximum group AP pool by 1</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class="cardItem button">
                    <div class="closeContainer">
                        <button class="close">x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/junktown-vendor.webp" class="zac"/>
                    <p>Junktown Vendor</p>
                    <ul>
                        <li class="perk-description">Charisma + Barter test attempts to buy or sell goods is reduced by
                            1
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Charisma 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Charisma;