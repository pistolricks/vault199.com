import {Component} from "solid-js";
import styles from "./style.module.css";

type PROPS = {

}

const Intelligence: Component<PROPS> = props => {

    return (
        <div>
            <div class={styles["cardContainer"]}>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/comprehension.png"/>
                    <p>Comprehension</p>
                    <ul>
                        <li class={styles["perk-description"]}>Roll 1d6 after using the effect of a magazine to retain it for an
                            additional use
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/gun-nut.webp"/>
                    <p>Gun Nut</p>
                    <ul>
                        <li class={styles["perk-description"]}>Able to create higher-level weapon mods</li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 2+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 6</span></li>
                        <li>Ranks: 4</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/science.webp"/>
                    <p>Science</p>
                    <ul>
                        <li class={styles["perk-description"]}>Able to create higher-level weapon and armor mods involving rare
                            materials
                        </li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 2+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/chemist.webp"/>
                    <p>Chemist</p>
                    <ul>
                        <li class={styles["perk-description"]}>Roll 1d6 after using the effect of a magazine to retain it for an
                            additional useChems created by you last twice as long and unlock new chem recipes
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/entomologist.webp"/>
                    <p>Entomologist</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain the 1 Piercing damage effect against all creatures with insect
                            keyword
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/healer.png"/>
                    <p>Healer</p>
                    <ul>
                        <li class={styles["perk-description"]}>Heal an additional hit point per rank with first aid action</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 11 (rank 3)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 7</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/hacker.webp"/>
                    <p>Hacker</p>
                    <ul>
                        <li class={styles["perk-description"]}>Decrease difficulty to hack computers by 1</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/medic.webp"/>
                    <p>Medic</p>
                    <ul>
                        <li class={styles["perk-description"]}>Re-roll 1d20 on First Aid actions</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/nerd-rage.webp"/>
                    <p>Nerd Rage</p>
                    <ul>
                        <li class={styles["perk-description"]}>When quarter Health, gain more Physical and Energy DR to all limbs
                            and more damage
                        </li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 2+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 8</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/robotics-expert.webp"/>
                    <p>Robotics Expert</p>
                    <ul>
                        <li class={styles["perk-description"]}>Rank 1: Modify armor with rank 1 robot mods</li>
                        <li class={styles["perk-description"]}>Rank 2: Reduce difficulty to repair robots</li>
                        <li class={styles["perk-description"]}>Rank 3: Hack and reprogram robots</li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 2+</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 8</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/nuclear-physicist.png"/>
                    <p>Nuclear Physicist</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increased damage of radiation weapons and fusion cores have 3
                            additional charges
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Intelligence 9</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Intelligence;