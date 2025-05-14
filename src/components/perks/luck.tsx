import {Component} from "solid-js";
import styles from "./style.module.css";

type PROPS = {}

const Luck: Component<PROPS> = props => {

    return (
        <div>

            <div class={styles["cardContainer"]}>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/strong-back.webp"/>
                    <p>Strong Back</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increased carry capacity</li>
                        <li class={styles["levelReq"]}>Level Req: <span class="levelGlow">Level 1+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 5</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/shotgun-surgeon.webp"/>
                    <p>Shotgun Surgeon</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain +1 Piercing when using shotguns</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 5, Agility 5</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/armorer.webp"/>
                    <p>Armorer</p>
                    <ul>
                        <li class={styles["perk-description"]}>Can modify armor with additional mods</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 </span>(rank 1)</li>
                        <li><span class={styles["levelGlow"]}>Level 5 </span>(rank 2)</li>
                        <li><span class={styles["levelGlow"]}>Level 9 </span>(rank 3)</li>
                        <li><span class={styles["levelGlow"]}>Level 13 </span>(rank 4)</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 5, Intelligence 6</span></li>
                        <li>Ranks: 4</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/basher.webp"/>
                    <p>Basher</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increased gun bashing damage</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/blacksmith.webp"/>
                    <p>Blacksmith</p>
                    <ul>
                        <li class={styles["perk-description"]}>Can modify melee weapons with additional mods</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 2 </span>(rank 1)</li>
                        <li><span class={styles["levelGlow"]}>Level 6 </span>(rank 2)</li>
                        <li><span class={styles["levelGlow"]}>Level 10 </span>(rank 3)</li>
                        <li><span class={styles["levelGlow"]}>Level 14 </span>(rank 4)</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/iron-fist.webp"/>
                    <p>Iron Fist</p>
                    <ul>
                        <li class={styles["perk-description"]}>+1d6 to unarmed damage</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 </span>(rank 1)</li>
                        <li><span class={styles["levelGlow"]}>Level 6 </span>(rank 2)</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/terrifying-presence.webp"/>
                    <p>Terrifying Presence</p>
                    <ul>
                        <li class={styles["perk-description"]}>Rank 1: Re-roll a single d20 when threatening or scaring another
                            person
                        </li>
                        <li class={styles["perk-description"]}>Rank 2: Gain the Threaten major action in combat</li>
                        <li class={styles["levelReq"]}>Level Req: <span class="levelGlow">3+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 6, Charisma 8</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/adrenalin-rush.webp"/>
                    <p>Adrenalin Rush</p>
                    <ul>
                        <li class={styles["perk-description"]}>When below max HP, count your strength as 10 for skills and weapon
                            hits
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/piercing-strike.webp"/>
                    <p>Piercing Strike</p>
                    <ul>
                        <li class={styles["perk-description"]}>+1 Piercing to Unarmed and bladed melee weapon attacks</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/barbarian.webp"/>
                    <p>Barbarian</p>
                    <ul>
                        <li class={styles["perk-description"]}>Physical DR on all hit locations is increased based on your
                            Strength
                        </li>
                        <li class={styles["levelReq"]}>Level Req: <span class="levelGlow">4</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 7</span>, No robot origin</li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/big-leagues.webp"/>
                    <p>Big Leagues</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain the Vicious damage effect on all two-handed melee weapons</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/heave-ho.webp"/>
                    <p>Heave Ho!</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increase range of throwing weapons by one zone by spending 1 AP
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/heave-ho.webp"/>
                    <p>Heave Ho!</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increase range of throwing weapons by one zone by spending 1 AP
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/paralyzing-palm.webp"/>
                    <p>Paralyzing Palm</p>
                    <ul>
                        <li class={styles["perk-description"]}>Aimed unarmed strikes gain the stun effect</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/slayer.webp"/>
                    <p>Slayer</p>
                    <ul>
                        <li class={styles["perk-description"]}>Damage with a melee or unarmed attack can be turned into a critical
                            hit with the spending of 1 luck point
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/pain-train.webp"/>
                    <p>Pain Train</p>
                    <ul>
                        <li class={styles["perk-description"]}>Rank 1: Gain Charge major action to damage and knock prone enemies
                            with a Str + Athletics test
                        </li>
                        <li class={styles["perk-description"]}>Rank 2: Add 1d6 and Stun damage effect</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 9, Endurance 7</span></li>
                        <li>Ranks: 1+</li>
                    </ul>
                </div>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/steady-aim.webp"/>
                    <p>Steady Aim</p>
                    <ul>
                        <li class={styles["perk-description"]}>When taking the aim minor action, re-roll 1 or 2 d20s depending
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Strength 8, Agility 7</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>


            </div>

        </div>
    );
};

export default Luck;