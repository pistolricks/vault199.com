import {Component, createEffect, createMemo} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import styles from "~/components/layouts/terminal/style.module.css"
import {loginUserHandler} from "~/lib/users";
import Check from "~/static/app/svgs/ui/check.svg?component-solid"
import XMark from "~/static/app/svgs/ui/x-mark.svg?component-solid"

const Login: Component<RouteSectionProps> = (props) => {


    const submission = useSubmission(loginUserHandler);


    const results = createMemo(() => {
        return submission?.result
    })

    createEffect(() => {
        console.log(results(), "results")
    })


    return (
        <TerminalLayout {...props}>

            <form class={'absolute top-1/4 z-50 h-full w-full  flex flex-col gap-6 p-10'} action={loginUserHandler} method={'post'}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>EMAIL</label>
                    <input class="bg-gray-300/20 w-full sm:w-full" name="email" type="email"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>PASSWORD </label>
                    <input class="bg-gray-300/20 w-full sm:w-full" name="password"
                                                   type="password"/>
                </div>

                <div class={"w-full flex gap-x-1 justify-end"}>
                    <A class={styles.button} href="/">
                        <XMark/>
                    </A>
                    <button class={styles.button} type="submit">
                        <Check class={"size-6 mx-2"}/>
                    </button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Login;