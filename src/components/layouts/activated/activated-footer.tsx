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
        <div class="absolute bottom-0 inset-x-[6.5%] h-[10%] sm:h-[11.5%] w-[87%]">
            <div
                class="flex justify-center items-center bg-green-950 space-x-2 sm:h-[40%] rounded-b-[9px] sm:rounded-b-[40px] border-b border-green-950 sm:border-green-700 border-l border-r border-t">

                <p class="progress-text">LEVEL<span class={"ml-1"}>{value()}</span></p>
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