import {Component} from "solid-js";
import BottomMenu from "~/components/pipboy/footer/bottom-menu";
import {Progress} from "@ark-ui/solid";


type PROPS = {
    onClick?: (e: string) => any;
    min?: number;
    max?: number;
    hp: string;
    ap: string;
    level: number;
}

const ActivatedFooter: Component<PROPS> = props => {

    const min = () => props.min ?? 0;
    const max = () => props.max ?? 100;
    const level = () => props.level;

    const hp = () => props.hp;
    const ap = () => props.ap;

    return (
        <div class="fixed bottom-13 inset-x-[6.5%] w-[87%] h-8 sm:h-10 rounded-b-[5px] sm:rounded-b-[45px] sm:ring-green-700 bg-green-950 border border-green-950 sm:border-green-700/50 sm:ring">
            <div class="flex justify-between items-center h-full w-full space-x-1.5 px-2">
                <p class="progress-text">HP<span class={"ml-0.5"}>{hp()}</span></p>
                <Progress.Root class={"relative"} min={min()} max={max()} value={level()}>
                    <Progress.Track>

                        <Progress.Range />
                    </Progress.Track>

                    <div class={"absolute inset-x-0 w-full h-full flex justify-center items-center progress-text tracking-wide"}>LEVEL {level()}</div>
                </Progress.Root>
                <p class="progress-text">AP<span class={"ml-0.5"}>{hp()}</span></p>
            </div>
        </div>
    );
};

export default ActivatedFooter;