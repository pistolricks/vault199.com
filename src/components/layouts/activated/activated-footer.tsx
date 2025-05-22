import {Component} from "solid-js";
import BaseDock from "~/components/base-dock";

type PROPS = {
  onClick?: (e: string) => any;
}

const ActivatedFooter: Component<PROPS> = props => {

    return (
        <div class="mx-auto max-w-7xl w-full px-6 py-2 md:flex md:items-center md:justify-center lg:px-8">
            <div class="flex justify-center gap-x-6 md:order-2 h-12 sm:h-14">

                <BaseDock onClick={props.onClick} />

            </div>
        </div>
    );
};

export default ActivatedFooter;