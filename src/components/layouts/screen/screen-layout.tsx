import {Component, ParentProps} from "solid-js";
import styles from "./style.module.css"

type PROPS = ParentProps & {
    height?: string;
    width?: string;
}

const ScreenLayout: Component<PROPS> = props => {

    const height = () => props.height ?? "100vh";
    const width = () => props.width ?? "100vw";

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