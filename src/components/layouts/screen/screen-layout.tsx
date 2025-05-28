import {Component, ParentProps} from "solid-js";
import styles from "./style.module.css"
import monitor from "~/static/pipboy/2000N/pipboy2000_monitor.png"
type PROPS = ParentProps & {
    height?: string;
    width?: string;
}

const ScreenLayout: Component<PROPS> = props => {

    const height = () => props.height ?? "100vh";
    const width = () => props.width ?? "100%";

    return (
        <div
            style={{
                height: height(),
                width: width(),
            }}
            class={styles.background}>
            <div class={styles.screen}>


                    {props.children}

            </div>
        </div>
    );
};

export default ScreenLayout;