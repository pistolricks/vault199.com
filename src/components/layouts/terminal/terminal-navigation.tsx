import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"


const TerminalNavigation: Component<RouteSectionProps> = props => {

    return (
        <nav class={`site ${styles.clear}`}>
            <ul>
                <li><a href="#" title="">Login</a></li>
            </ul>
        </nav>
    );
};

export default TerminalNavigation;