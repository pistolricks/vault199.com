import {Component} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import Logo from "~/static/logos/vault-tec.png";


const Home: Component<RouteSectionProps> = (props) => {


    return (

        <TerminalLayout {...props} >
            <div
                style={{
                    'background-image': `url(${Logo})`,
                    'background-size': 'contain',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'background-color': 'transparent',
                }} class={'sm:hidden absolute left-1/4 top-1/8 size-1/2 '}/>

        </TerminalLayout>

    );
}

export default Home;