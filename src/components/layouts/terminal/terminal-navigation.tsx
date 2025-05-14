import {Component, Show} from "solid-js";
import {A, RouteSectionProps, useLocation} from "@solidjs/router";
import styles from "./style.module.css"
import {currentUser} from "~/app";
import Logout from "~/components/logout";


const TerminalNavigation: Component<RouteSectionProps> = props => {

    const location = useLocation();


    return (
        <nav class={`${styles.site} ${styles.clear}`}>
            <ul>
                <Show when={location.pathname !== "/"}>
                    <li><A href="/" title="">HOME</A></li>
                </Show>
                <Show when={!currentUser()}>
                    <li><A activeClass={"selected"} href="/login" title="">LOGIN</A></li>
                </Show>
            </ul>
        </nav>
    );
};

export default TerminalNavigation;