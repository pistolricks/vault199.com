import {Component, JSXElement, Setter, Show} from "solid-js";
import pleaseStandBy from "~/static/gifs/please_stand_by.gif";
import {BaseNoSignalScreen} from "~/components/ui/no-signal-screen";
import {BaseNumberTicker} from "~/components/ui/number-ticker";

type PROPS = {
    children?: JSXElement
}

const PLeaseStandBy: Component<PROPS> = props => {

    const children = () => props.children;

    return (
        <div class={"flex justify-center items-center h-screen"}>
            <BaseNoSignalScreen/>
            {children()}
            <img src={pleaseStandBy} class={'rounded-2xl object-cover h-screen opacity-50 border border-transparent'}
                 alt={""}/>

        </div>
    );
};

export default PLeaseStandBy;