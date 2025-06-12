import {Component, createEffect, createMemo} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import styles from "~/components/layouts/terminal/style.module.css"
import {registerUserHandler} from "~/lib/users";
import Check from "~/static/app/svgs/ui/check.svg?component-solid"
import XMark from "~/static/app/svgs/ui/x-mark.svg?component-solid"

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

            <form action={registerUserHandler} method={"post"} class={'absolute top-1/8 z-50 h-full w-full  flex flex-col gap-3 p-10'}>
                <div class={"flex flex-col sm:justify-start w-full"}>
                    <label>FIRST NAME</label>
                    <input class={'px-1 bg-gray-300/20 w-full'} type="text" required name="firstName"
                           placeholder="Erik"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>LAST NAME</label>
                    <input class={'px-1 bg-gray-300/20 w-full '} type="text" required name="lastName"
                           placeholder="Smith"/>
                </div>
                <div class={"flex flex-col sm:justify-start w-full"}>
                    <label>USERNAME</label>
                    <input class={'px-1 bg-gray-300/20 w-full'} type="text" required name="username"
                           placeholder="darthSmooth"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>EMAIL</label>
                    <input class="px-1 bg-gray-300/20 w-full" required type="email" name="email" placeholder="erik@dsmooth.com"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>PASSWORD</label>
                    <input class="px-1 bg-gray-300/20 w-full" required type="password" name="password"
                           placeholder="*******"/>
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

export default Register;