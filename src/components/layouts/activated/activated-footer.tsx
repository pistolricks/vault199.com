import {Component} from "solid-js";
import BottomMenu from "~/components/pipboy/footer/bottom-menu";
import {Progress} from "@ark-ui/solid";
import {ICharacter} from "~/components/character/config";


type PROPS = {
    onClick?: (e: string) => any;
    min?: number;
    max?: number;
    hp: number;
    hpMax: number;
    ap: number;
    apMax: number;
    level: number;
}

const ActivatedFooter: Component<ICharacter> = props => {

    const level = () => props.stats?.level ?? 0;
    const hp = () => props.stats?.healthPoints ?? 0;
    const hpMax = () => props.stats?.maxHealthPoints ?? 10;
    const ap = () => props.stats?.actionPoints ?? 0;


    return (
        <div class="absolute bottom-4 inset-x-0 w-full h-8 sm:h-10 rounded-b-[5px] sm:rounded-b-[45px]">
            <div class="flex justify-between items-center h-full w-full space-x-1.5 px-2">

                <Progress.Root class={"relative"} min={0} max={hpMax()} value={hp()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>HP {hp()}</div>
                </Progress.Root>
                <Progress.Root class={"relative"} min={0} max={100} value={level()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>LEVEL {level()}</div>
                </Progress.Root>
                <Progress.Root class={"relative"} min={0} max={6} value={ap()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>AP {ap()}</div>
                </Progress.Root>


            </div>
        </div>
    );
};

export default ActivatedFooter;