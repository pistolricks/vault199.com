import {Component, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";

const Home: Component<RouteSectionProps> = (props) => {
    const [count, setCount] = createSignal(0);

    return (
        <TerminalLayout {...props} >

            <p>System Administrator Integrated Message System (SAIMS)</p>
            <p>System Administrator (SYSADM) - Mack Richardson</p>

            <p class="clear"><br/></p>


        </TerminalLayout>


    );
}

export default Home;