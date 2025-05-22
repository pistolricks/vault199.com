import {Component} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";


const Home: Component<RouteSectionProps> = (props) => {


    return (
        <TerminalLayout {...props} >


            <p class="clear"><br/></p>


        </TerminalLayout>
    );
}

export default Home;