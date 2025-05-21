import {Component, createEffect, createMemo, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import styles from "~/components/layouts/terminal/style.module.css"
import {registerUserHandler} from "~/lib/users";

const Register: Component<RouteSectionProps> = (props) => {
    const submission = useSubmission(registerUserHandler);

    const errors = createMemo(() => {
        return submission.error
    })

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        console.log(results())
    })

    return (
        <TerminalLayout {...props}>
            <form action={registerUserHandler} method={"post"} class={'flex flex-col gap-6'}>
                <div class={"flex flex-col sm:justify-start w-full"}>
                    <input class={'px-1 bg-gray-300/20 w-full'} type="text" required name="firstName"
                           placeholder="First Name"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class={'px-1 bg-gray-300/20 w-full '} type="text" required name="lastName"
                           placeholder="Last Name"/>
                </div>
                <div class={"flex flex-col sm:justify-start w-full"}>
                    <input class={'px-1 bg-gray-300/20 w-full'} type="text" required name="username"
                           placeholder="Username"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class="px-1 bg-gray-300/20 w-full" required type="email" name="email" placeholder="Email"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class="px-1 bg-gray-300/20 w-full" required type="password" name="password"
                           placeholder="Password"/>
                </div>

                <div class={"w-full flex gap-x-1 justify-end"}>
                    <A class={styles.button} href="/">Cancel</A>
                    <button class={styles.button} type="submit">Submit</button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Register;