import {Component, createEffect, createMemo, createSignal, Show} from "solid-js";
import {A, RouteSectionProps} from "@solidjs/router";
import styles from "./style.module.css"
import Logo from "~/static/images/vault-tec.png"
import {cookies, currentUser} from "~/app";
import Logout from "~/components/logout";

import vaultTecLogo from "~/static/images/vault.png";
import Drawer from "@corvu/drawer";
const ActivatedHeader: Component<RouteSectionProps> = props => {

    const [getToken, setToken] = createSignal(cookies.get("token"))

    const  token = createMemo(() => {
        setToken(cookies.get("token"))
        return getToken();
    })

    const [getState, setState] = createSignal(false)

    createEffect(() => {
        console.log(token(), "token")

        document.onclick = (e) => {
            const target = e.target as Element;
            if(!target.closest('.menu-btn')) setState(false)
        }
    })
    return (

        <div class={styles["background"] + "h-60 overflow-y-auto"}>
        <header class={"sticky top-0 py-4 z-40 h-10 items-center"}>
            <nav class={`pb-5 md:text-sm flex justify-between items-center`}>
                <div class="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <div class="flex items-center justify-between py-5 md:block">


                    </div>
                    <div class={`flex-1 items-center mt-8 md:mt-0 md:flex ${getState() ? 'block' : 'hidden'} `}>
                        <ul class="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                       {/* MENU */}
                        </ul>
                        <div class="flex-1 gap-x-6 mr-2 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">

                            <div></div>

                        </div>
                    </div>
                </div>
                <Show when={token()}>
                    <Drawer.Trigger as={"button"} contextId={"activated-1"} class="menu-btn h-10 w-8 text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!getState())}
                    >
                        {
                            getState() ? (
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )
                        }
                    </Drawer.Trigger>

                </Show>
            </nav>



        </header>
        </div>
    );
};

export default ActivatedHeader;