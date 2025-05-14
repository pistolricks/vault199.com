import {Component} from "solid-js";
import PerkComponent from "~/components/perks";
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";

type PROPS = {

}

const Perks: Component<RouteSectionProps> = props => {

    return (
        <TerminalLayout {...props}>
            <PerkComponent/>
        </TerminalLayout>
    );
};

export default Perks;