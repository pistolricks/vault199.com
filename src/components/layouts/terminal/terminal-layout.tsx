import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import TerminalHeader from "~/components/layouts/terminal/terminal-header";
import TerminalNavigation from "~/components/layouts/terminal/terminal-navigation";
import styles from "./style.module.css"

const TerminalLayout: Component<RouteSectionProps> = props => {

    return (
        <div class={styles["terminal-body"]}>
            <div class={styles["overlay"]}></div>
            <div class={styles["scanline"]}></div>
            <div class={styles["wrapper"]}>
                <div class={`${styles.content} ${styles.clearfix}`}>

                    <TerminalHeader {...props}/>
                    <TerminalNavigation {...props}/>

                    {props.children}


                </div>
            </div>
        </div>
    );
}

export default TerminalLayout;