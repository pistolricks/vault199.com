import {Component} from "solid-js";
import {RouteSectionProps, useIsRouting} from "@solidjs/router";
import styles from "./style.module.css"

const UpdatingLayout: Component<RouteSectionProps> = props => {

    const isRouting = useIsRouting();

    return (
        <div class={styles["background"]}>
            <div class={styles["interlaced"]}></div>
            <div class={styles["glare"]}></div>


            {props.children}


        </div>

    );
}

export default UpdatingLayout;