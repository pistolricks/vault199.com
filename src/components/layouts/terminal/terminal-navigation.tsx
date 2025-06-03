import {Component, Show} from "solid-js";
import {A, RouteSectionProps, useLocation} from "@solidjs/router";
import styles from "./style.module.css"
import {currentUser} from "~/app";
import Logout from "~/components/logout";
import contacts from "~/static/app/icons/ui/contacts.png";
import map from "~/static/app/icons/ui/map.png";
import media from "~/static/app/icons/ui/details.png";


const TerminalNavigation: Component<RouteSectionProps> = props => {

    const location = useLocation();



    return (
        <nav class={`${styles.site} ${styles.clear}`}>
            <ul>
                <Show when={location.pathname !== "/"}>
                    <li><A href="/" title="">HOME</A></li>
                </Show>
                <Show when={!currentUser()?.token()}>
                   <li><A activeClass={"selected"} href="/login" title="">LOGIN</A></li>
                    <li><A activeClass={"selected"} href="/profile" title="">INITIALIZE</A></li>
                </Show>
            </ul>
        </nav>
    );
};

export default TerminalNavigation;