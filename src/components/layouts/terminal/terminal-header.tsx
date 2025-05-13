import {Component, Show} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import Logo from "~/static/images/vault-tec.png"
import {currentUser} from "~/app";
import Logout from "~/components/logout";


const TerminalHeader: Component<RouteSectionProps> = props => {


    return (

        <header class={`site ${styles.clearfix}`}>
            <Show when={currentUser}>
                <div class={"absolute top-0 right-0"}>
                <Logout/>
                </div>
            </Show>
            <div class="sm:hidden flex justify-center items-center">
                <img src={Logo} alt="Vault-Tec" width="740" height="729" class={styles["logo-v"]}/>
            </div>
            <div class="hidden sm:block">
            <div class={styles["col-one"]}>
                <img src={Logo} alt="Vault-Tec" width="740" height="729" class={styles["logo-v"]}/>
            </div>
            </div>

        </header>

    );
};

export default TerminalHeader;