import {Component, createEffect, createMemo, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import {loginUserHandler} from "~/lib/users";

const Login: Component<RouteSectionProps> = (props) => {


    const submission = useSubmission(loginUserHandler);


    const errors = createMemo(() => {
        return submission.error
    })

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        console.log(results(),"results")
    })



    return (
        <TerminalLayout {...props}>
            <form class={'flex flex-col gap-6'} action={loginUserHandler} method={'post'}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>EMAIL </label>
                    <input class="bg-gray-300/20 w-full sm:w-full" name="email" type="email"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>PASSWORD </label><input class="bg-gray-300/20 w-full sm:w-full" name="password" type="password"/>
                </div>

                <div class={"w-full flex justify-end"}>
                    <A class="button" href="/">Cancel</A>
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Login;