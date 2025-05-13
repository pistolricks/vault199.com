import {Component, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";

const Home: Component<RouteSectionProps> = (props) => {
    const [count, setCount] = createSignal(0);

    return (
        <TerminalLayout {...props} >

            <p>System Administrator Integrated Message System (SAIMS)</p>
            <p>System Administrator (SYSADM) - Mack Richardson</p>

            <p class="clear"><br/></p>

            <p>Welcome to the System Administrator Integrated Message System (SAIMS). Fill out the fields below and
                press the SUBMIT button. The system administrator (SYSADM) will respond to your query after an
                appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's
                Office.</p><br/>


        </TerminalLayout>
    );
}

export default Home;