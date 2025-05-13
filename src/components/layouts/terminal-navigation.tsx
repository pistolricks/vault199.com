import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";



const TerminalNavigation: Component<RouteSectionProps> = props => {

    return (
        <nav class="site clear">
            <ul>
                <li><a href="#" title="">Return Home</a></li>
                <li><a href="#" title="">Login</a></li>
            </ul>
        </nav>
    );
};

export default TerminalNavigation;