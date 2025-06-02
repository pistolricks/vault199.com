import {Component} from "solid-js";
import BottomMenu from "~/components/pipboy/footer/bottom-menu";
import {Progress} from "@ark-ui/solid";


type PROPS = {
    onClick?: (e: string) => any;
    min?: number;
    max?: number;
    value: number;
}

const ActivatedFooter: Component<PROPS> = props => {

    const min = () => props.min ?? 0;
    const max = () => props.max ?? 100;
    const value = () => props.value;

    return (
        <div class="fixed bottom-13 inset-x-[6.5%] w-[87%] h-8 sm:h-10 rounded-b-[5px] sm:rounded-b-[45px] sm:ring-green-700 bg-green-950 border border-green-950 sm:border-green-700/50 sm:ring">
            <div class="flex justify-center items-center h-full w-full space-x-1.5">
                <p class="progress-text">LVL<span class={"ml-0.5"}>{value()}</span></p>
                <Progress.Root min={min()} max={max()} value={value()}>
                    <Progress.Track>
                        <Progress.Range/>
                    </Progress.Track>
                </Progress.Root>

            </div>
        </div>
    );
};

export default ActivatedFooter;