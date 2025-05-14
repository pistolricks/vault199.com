import {Component} from "solid-js";
import styles from "~/components/perks/style.module.css";

type PROPS = {

}

const Agility: Component<PROPS> = props => {

    return (
        <div>
            <div class={styles["cardContainer"]}>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/dodger.webp" alt={""}/>
                    <p>Dodger</p>
                    <ul>
                        <li class="perk-description">Reduce difficulty of Defend major action by 1</li>
                        <li class="levelReq">Level Req:</li>
                        <li><span class="levelGlow">Level 4 (rank 1)</span></li>
                        <li><span class="levelGlow">Level 10 (rank 2)</span></li>
                        <li>Other Req: <span class="perkGlow">Agility 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/moving-target.webp" alt={""}/>
                    <p>Moving Target</p>
                    <ul>
                        <li class="perk-description">When sprinting, Defense increase +1 until next turn</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Agility 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/quick-hands.webp" alt={""}/>
                    <p>Quick Draw</p>
                    <ul>
                        <li class="perk-description">Draw an item or weapon for free</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Agility 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/center-of-mass.webp" alt={""}/>
                    <p>Center of Mass</p>
                    <ul>
                        <li class="perk-description">Choose to aim at the torso of an enemy without an increase in
                            difficulty when making a ranged attack.
                        </li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Agility 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/rifleman.webp" alt={""}/>
                    <p>Rifleman</p>
                    <ul>
                        <li class="perk-description"> Increased damage for non-heavy twohanded weapons</li>
                        <li class="levelReq">Level Req: None</li>
                        <li>Other Req: <span class="perkGlow">Agility 7</span></li>
                        <li>Ranks: 3</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Agility;