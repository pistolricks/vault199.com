import {Component} from "solid-js";
import PipBoyComponent from "~/components/pipboy";

type PROPS = {

}

const PipBoy: Component<PROPS> = props => {

    return (
        <div>
            <PipBoyComponent/>
        </div>
    );
};

export default PipBoy;