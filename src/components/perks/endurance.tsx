import {Component} from "solid-js";
import styles from "./style.module.css";

type PROPS = {

}

const Endurance: Component<PROPS> = props => {

    return (
        <div>
            <div class={styles["cardContainer"]}>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/aquaboy.webp"/>
                    <p>Aquaboy/Aquagirl</p>
                    <ul>
                        <li class={styles["perk-description"]}>Immune to radiation from water and can hold breath twice as long
                        </li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li class={styles["levelReq"]}><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li class={styles["levelReq"]}><span class={styles["levelGlow"]}>Level 4 (rank 2)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 5</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/fast-metabolism.webp"/>
                    <p>Fast Metabolism</p>
                    <ul>
                        <li class={styles["perk-description"]}>+1 Hit Points per rank from any source other than resting</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 4 (rank 2)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 7 (rank 3)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/hunter.webp"/>
                    <p>Hunter</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain the Vicious damage effect against mutated mammals, lizards,
                            and insects
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/lead-belly.webp"/>
                    <p>Lead Belly</p>
                    <ul>
                        <li class={styles["perk-description"]}>Reduced or immunity to radiation damage from food</li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 1</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/pathfinder.webp"/>
                    <p>Pathfinder</p>
                    <ul>
                        <li class={styles["perk-description"]}>Reduced travel time by half with a successful Perception + Survival
                            roll
                        </li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 6</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>


                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/pyromaniac.webp"/>
                    <p>Pyromaniac</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increased damage with fire-based weapons by 1d6 per rank</li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 2</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/rad-resistant.webp"/>
                    <p>Rad Resistant</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increased radiation resistance by 10 per rank</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 11 (rank 3)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 6</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/cannibal.webp"/>
                    <p>Cannibal</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain the ability to eat human flesh to restore Hit Points</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/chem-resistant.webp"/>
                    <p>Chem Resistant</p>
                    <ul>
                        <li class={styles["perk-description"]}>Rank 1: 50% chance to avoid addiction when using chems</li>
                        <li class={styles["perk-description"]}>Rank 2: Immunity to addiction when using chems</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 7</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/life-giver.webp"/>
                    <p>Life Giver</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain +20 maximum Hit Points per rank</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 11 (rank 3)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 7</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/adamantium-skeleton.webp"/>
                    <p>Adamantium Skeleton</p>
                    <ul>
                        <li class={styles["perk-description"]}>Limb damage is reduced by 30% per rank</li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 11 (rank 3)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 8</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/aqua-boy.webp"/>
                    <p>Ghoulish</p>
                    <ul>
                        <li class={styles["perk-description"]}>Radiation now regenerates your lost Hit Points</li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 6</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/solar-powered.webp"/>
                    <p>Solar Powered</p>
                    <ul>
                        <li class={styles["perk-description"]}>Gain +2 to Strength and Endurance between 6:00 a.m. and 6:00 p.m.
                            while outdoors
                        </li>
                        <li class={styles["levelReq"]}>Level Req: <span class={styles["levelGlow"]}>Level 6</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Endurance 9</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Endurance;