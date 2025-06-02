import {Component, ParentProps} from "solid-js";
import styles from "./style.module.css"
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000-monitor.png"
import ActivatedFooter from "~/components/layouts/activated/activated-footer";


const ActivatedLayout: Component<ParentProps> = props => {


    return (
        <div>
            <div class={styles["background"] + "min-h-dvh h-dvh flex flex-col"}>
                <div class={styles["interlaced"]}></div>
                <div class={styles["glare"]}></div>

                <div
                    style={{
                        'background-image': `url(${pbMonitor3000})`,
                        'background-repeat': 'no-repeat',
                        'background-size': '100% 100%',
                    }}
                    class={"fixed inset-0 w-full h-full z-0 flex flex-row overflow-hidden"}></div>


                {props.children}
            </div>


            <ActivatedFooter hp={'89/110'} ap={'110/110'} level={40}/>
        </div>
    );
}

export default ActivatedLayout;