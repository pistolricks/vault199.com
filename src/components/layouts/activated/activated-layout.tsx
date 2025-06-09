import {Component, ParentProps} from "solid-js";
import styles from "./style.module.css"
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000ND-monitor.png"


const ActivatedLayout: Component<ParentProps> = props => {


    return (
        <div class={"bg-black"}>
            <div class={styles["background"] + "min-h-dvh h-dvh flex flex-col "}>

                <div
                    style={{
                        'background-image': `url(${pbMonitor3000})`,
                        'background-repeat': 'no-repeat',
                        'background-size': '100% 100%',
                    }}
                    class={"fixed inset-0 w-full h-full z-0 flex flex-row overflow-hidden"}></div>


                {props.children}
            </div>


        </div>
    );
}

export default ActivatedLayout;