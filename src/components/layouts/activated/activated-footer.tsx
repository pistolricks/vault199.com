import {Component} from "solid-js";
import BottomMenu from "~/components/pipboy/footer/bottom-menu";
import {Progress} from "@ark-ui/solid";


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

const ActivatedFooter: Component<PROPS> = props => {

    const min = () => props.min ?? 0;
    const max = () => props.max ?? 100;
    const level = () => props.level;

    const hp = () => props.hp;
    const hpMax = () => props.hpMax;

    const ap = () => props.ap;
    const apMax = () => props.apMax;

    return (
        <div class="absolute bottom-4 inset-x-0 w-full h-8 sm:h-10 rounded-b-[5px] sm:rounded-b-[45px]">
            <div class="flex justify-between items-center h-full w-full space-x-1.5 px-2">

                <Progress.Root class={"relative"} min={0} max={hpMax()} value={hp()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>HP {hp()}</div>
                </Progress.Root>
                <Progress.Root class={"relative"} min={min()} max={max()} value={level()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>LEVEL {level()}</div>
                </Progress.Root>
                <Progress.Root class={"relative"} min={0} max={apMax()} value={ap()}>
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