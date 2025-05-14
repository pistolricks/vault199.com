import {Component} from "solid-js";
import styles from "./style.module.css";

type PROPS = {

}

const Charisma: Component<PROPS> = props => {

    return (
        <div>
            <div class={styles["cardContainer"]}>
                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/cap-collector.png" class={styles["imgFix"]} alt={""}/>
                    <p>Cap Collector</p>
                    <ul>
                        <li class={styles["perk-description"]}>Decreased buying and increased selling prices by 10%</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 5</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/dogmeat.png" class={styles["zac"]}/>
                    <p>Dogmeat</p>
                    <ul>
                        <li class={styles["perk-description"]}>The faithful canine companion Dogmeat</li>
                        <li class={styles["perk-description"]}>He's a very good boy with strong legs</li>
                        <li class={styles["perk-description"]}>Comes with a cute lil suit</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 5</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/animal-friend.webp" class={styles["zac"]} alt={""}/>
                    <p>Animal Friend</p>
                    <ul>
                        <li class={styles["perk-description"]}>Rank 1: Hostile animals may roll to not attack you</li>
                        <li class={styles["perk-description"]}>Rank 2: Gain the pacify animals major action, affecting:</li>
                        <li class={styles["perk-description"]}>Blood bug, Bloatfly, Brahmin, Deathclaw, Dog, Mole rat, Mutant
                            hound,
                            Radroach, Radstag, Stingwing, Yao Guai
                        </li>
                        <li class={styles["levelReq"]}>Level Req:</li>
                        <li><span class={styles["levelGlow"]}>Level 1 (rank 1)</span></li>
                        <li><span class={styles["levelGlow"]}>Level 6 (rank 2)</span></li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 6</span></li>
                        <li>Ranks: 2</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/black-widow.webp" class={styles["zac"]} alt={""}/>
                    <p>Black Widow/Lady Killer</p>
                    <ul>
                        <li class={styles["perk-description"]}>Re-roll 1d20 on Charisma checks to influence NPCs.
                            Additionally, inflict 1d6 of damage to the opposite gender
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/smooth-talker.webp" class={styles["zac"]} alt={""}/>
                    <p>Smooth Talker</p>
                    <ul>
                        <li class={styles["perk-description"]}>Re-roll 1d20 on opposed tests involving Barter or Speech</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 6</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/scoundrel.webp" class={styles["zac"]} alt={""}/>
                    <p>Scoundrel</p>
                    <ul>
                        <li class={styles["perk-description"]}>Ignore the first complication rolled in Charisma + Speech checks
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 7</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/inspirational.webp" class={styles["zac"]} alt={""}/>
                    <p>Inspirational</p>
                    <ul>
                        <li class={styles["perk-description"]}>Increase maximum group AP pool by 1</li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

                <div class={`${styles["cardItem"]} ${styles["button"]}`}>
                    <div class={styles["closeContainer"]}>
                        <button class={styles["close"]}>x</button>
                    </div>
                    <img src="/src/static/perks/images/ui/junktown-vendor.webp" class={styles["zac"]} alt={""}/>
                    <p>Junktown Vendor</p>
                    <ul>
                        <li class={styles["perk-description"]}>Charisma + Barter test attempts to buy or sell goods is reduced by
                            1
                        </li>
                        <li class={styles["levelReq"]}>Level Req: None</li>
                        <li>Other Req: <span class={styles["perkGlow"]}>Charisma 8</span></li>
                        <li>Ranks: 1</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Charisma;