import {Component, createMemo, createSignal, JSX} from "solid-js";
import Strength from "~/components/perks/strength";
import Perception from "~/components/perks/perception";
import Endurance from "~/components/perks/endurance";
import Charisma from "~/components/perks/charisma";
import Intelligence from "~/components/perks/intelligence";
import Agility from "~/components/perks/agility";
import Luck from "~/components/perks/luck";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer";
import {Dynamic} from "solid-js/web";
import styles from "~/components/layouts/terminal/style.module.css";

type PROPS = {}

export function Default() {
    return <></>
}

const PerkComponent: Component<PROPS> = props => {

    const components = {
        index: Default,
        strength: Strength,
        perception: Perception,
        endurance: Endurance,
        charisma: Charisma,
        intelligence: Intelligence,
        agility: Agility,
        luck: Luck,
    }


    const [getPerk, setPerk] = createSignal(components["strength"])

    const [getOpen, setOpen] = createSignal(false)


    const handleOpen = () => {
        setOpen(true)
    }

    const handleComponent = (data: string, event: Event) => {
        console.log("Data:", data, "Event:", event);
        setOpen(false)
        setPerk(() => components[data]);
        handleOpen()

    };


    const component = createMemo(() => {
        console.log("perk", getPerk())
        return getPerk()
    })


    return (
        <div>
            <BaseDrawer open={getOpen()} setOpen={setOpen} contextId={"perks-1"} side={"right"}>

                <div class="grid grid-cols-2 gap-1">
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "strength"]}>Strength
                    </button>
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "perception"]}>Perception
                    </button>
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "endurance"]}>Endurance
                    </button>
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "charisma"]}>Charisma
                    </button>
                    <button class={`${styles.button} text-2xl`}
                            onClick={[handleComponent, "intelligence"]}>Intelligence
                    </button>
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "agility"]}>Agility</button>
                    <button class={`${styles.button} text-2xl`} onClick={[handleComponent, "luck"]}>Luck</button>
                </div>

                <DrawerContent class={"relative h-screen w-full overflow-y-auto overflow-x-hidden"}
                               contextId={"perks-1"} side={"right"}>
                    <div class={styles["terminal-body"]}>

                        <div class={styles["scanline"]}></div>

                        <div class={"sm:absolute bottom-4 inset-x-0 w-full flex justify-center"}>
                            <Dynamic component={component()}/>
                        </div>

                    </div>
                </DrawerContent>


            </BaseDrawer>
        </div>
    );
};

export default PerkComponent;


