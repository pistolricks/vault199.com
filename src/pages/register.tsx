import {Component} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import LoginCard from "~/components/auth/login-card";

const Register: Component<RouteSectionProps> = (props) => {

    return (
        <TerminalLayout {...props}>
            <LoginCard isLogin={false}/>
        </TerminalLayout>


    );
}

export default Register;