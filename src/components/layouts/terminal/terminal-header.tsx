import {Component, createEffect, createMemo, createSignal, Show} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import Logo from "~/static/logos/vault-tec.png"
import {cookies, currentUser} from "~/app";
import Logout from "~/components/logout";


const TerminalHeader: Component<RouteSectionProps> = props => {

    const [getToken, setToken] = createSignal(cookies.get("token"))

    const  token = createMemo(() => {
        setToken(cookies.get("token"))
        return getToken();
    })

    createEffect(() => {
        console.log(token(), "token")
    })
    return (

        <header class={`${styles.site} ${styles.clearfix}`}>
            <Show when={token()}>
                <div class={"absolute top-0 right-0"}>
                    <Logout token={token()}/>
                </div>
            </Show>
            <div class="sm:hidden flex justify-center items-start">
                <img src={Logo} alt="Vault-Tec"  class={"object-contain max-w-[150px]"}/>
            </div>
            <div class="hidden sm:flex justify-start items-start gap-2">
                <div class={styles["col-one"]}>
                    <img src={Logo} alt="Vault-Tec"  class={"object-contain w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px]"}/>
                </div>
                <div class={"leading-6"}>
                    <div class={"px-2"}>
                        <h4 class={"leading-none"}>ROBCO INDUSTRIES (tm) <br/> <b>U</b>nified <b>O</b>perating <b>S</b>ystem</h4>
                        <p>---------------------</p>
                        <p class={"leading-none text-sm"}>v 1.0.0</p>
                        <p class={"text-sm"}>(c)2075 - 2077 ROBCO INDUSTRIES</p>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default TerminalHeader;