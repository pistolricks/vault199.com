import {Component, Show} from "solid-js";
import {RouteSectionProps, useIsRouting} from "@solidjs/router";
import TerminalHeader from "~/components/layouts/terminal/terminal-header";
import TerminalNavigation from "~/components/layouts/terminal/terminal-navigation";
import styles from "./style.module.css"
import PleaseStandBy from "~/static/images/please-stand-by.jpg"

const TerminalLayout: Component<RouteSectionProps> = props => {

    const isRouting = useIsRouting();

    return (

        <div class={styles["terminal-body"]}>
            <div class={styles["overlay"]}></div>
            <div class={styles["scanline"]}></div>
            <div class={styles["wrapper"]}>
                <div class={`${styles.content} ${styles.clearfix}`}>



                    <Show
                        fallback={
                        <div class={""}>

                            <img src={PleaseStandBy} class="absolute inset-0 w-full h-full object-cover" alt="Please stand by"/>


                        </div>
                        }
                        when={!isRouting()}>
                        <TerminalHeader {...props}/>
                        <TerminalNavigation {...props}/>

                            {props.children}


                    </Show>

                </div>
            </div>
        </div>
    );
}

export default TerminalLayout;