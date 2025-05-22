import {Component, Show} from "solid-js";
import {RouteSectionProps, useIsRouting} from "@solidjs/router";
import TerminalHeader from "~/components/layouts/terminal/terminal-header";
import TerminalNavigation from "~/components/layouts/terminal/terminal-navigation";
import styles from "./style.module.css"
import PleaseStandBy from "~/static/images/please-stand-by.jpg"
import AiCompanion from "~/components/ai-companion";

const UpdatingLayout: Component<RouteSectionProps> = props => {

    const isRouting = useIsRouting();

    return (
        <div class={styles["background"]}>
            <div class={styles["interlaced"]}></div>
                <div class={styles["glare"]}></div>


                <Show
                    fallback={
                        <div class={""}>


                        </div>
                    }
                    when={!isRouting()}>


                    {props.children}

                </Show>


            </div>

    );
}

export default UpdatingLayout;