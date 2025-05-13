import {Component, Show} from "solid-js";
import {A, RouteSectionProps, useLocation} from "@solidjs/router";
import styles from "./style.module.css"


const TerminalNavigation: Component<RouteSectionProps> = props => {

    const location = useLocation();


    return (
        <nav class={`site ${styles.clear}`}>
            <ul>
                <Show when={location.pathname !== "/"}>
                    <li><A href="/" title="">HOME</A></li>
                </Show>
                <li><A activeClass={"selected"} href="/login" title="">LOGIN</A></li>
            </ul>
        </nav>
    );
};

export default TerminalNavigation;