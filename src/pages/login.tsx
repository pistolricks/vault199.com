import {Component} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import LoginCard from "~/components/auth/login-card";

const Login: Component<RouteSectionProps> = (props) => {



    return (
        <TerminalLayout {...props}>
            <LoginCard isLogin={true} />
        </TerminalLayout>


    );
}

export default Login;