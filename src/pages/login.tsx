import {Component, createEffect, createMemo} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import styles from "~/components/layouts/terminal/style.module.css"
import {loginUserHandler} from "~/lib/users";

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
            <form class={'flex flex-col gap-6'} action={loginUserHandler} method={'post'}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>Username </label>
                    <input class="bg-gray-300/20 w-full sm:w-full" name="username" type="text"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>PASSWORD </label><input class="bg-gray-300/20 w-full sm:w-full" name="password"
                                                   type="password"/>
                </div>

                <div class={"w-full flex gap-x-1 justify-end"}>
                    <A class={styles.button} href="/">Cancel</A>
                    <button class={styles.button} type="submit">Submit</button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Login;