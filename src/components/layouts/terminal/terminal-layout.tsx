import {Component, Show} from "solid-js";
import {RouteSectionProps, useIsRouting} from "@solidjs/router";
import TerminalHeader from "~/components/layouts/terminal/terminal-header";
import styles from "./style.module.css"
import PleaseStandBy from "~/static/banners/please-stand-by.jpg"
import PipBoy from "~/components/pipboy";
import pbMonitor3000 from "~/static/pipboy/3000N/pipboy-3000ND-monitor.png";
import login from "~/static/app/icons/fallout/tech.png";
import cover from "~/static/app/icons/apps/blank.png";

const TerminalLayout: Component<RouteSectionProps> = props => {

    const isRouting = useIsRouting();

    const menu = [
        {name: "contacts", href: '/login', icon: login, class: 'p-1'},
        {name: "login", href: '/', icon: login, class: 'p-1'},
        {name: "media", href: '/dashboard', icon: login, class: 'p-1'},
    ]

    const subMenu = [
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
        {name: "home", href: '#', icon: cover},
    ]

    return (

        <div
            style={{
                'background-image': `url(${pbMonitor3000})`,
                'background-repeat': 'no-repeat',
                'background-size': '100% 100%',
            }}
            class={styles["terminal-body"]}>
            {/*
            <div class={styles["overlay"]}></div>
            <div class={styles["scanline"]}></div>
           */}
            <div class={styles["wrapper"]}>
                <div class={`${styles.content} ${styles.clearfix} w-full`}>


                    <Show
                        fallback={
                            <div class={""}>

                                <img src={PleaseStandBy} class="absolute inset-0 w-full h-full object-cover"
                                     alt="Please stand by"/>
                            </div>
                        }
                        when={!isRouting()}>
                        <PipBoy menuItems={menu} subMenuItems={subMenu}>
                            <TerminalHeader {...props}/>

                            {props.children}
                        </PipBoy>
                    </Show>
                </div>
            </div>
        </div>
    );
}

export default TerminalLayout;