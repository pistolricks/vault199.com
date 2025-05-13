import {Component, createEffect, createMemo, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import {loginUserHandler} from "~/lib/users";

const Home: Component<RouteSectionProps> = (props) => {
    const [count, setCount] = createSignal(0);

    const submission = useSubmission(loginUserHandler);

    const errors = createMemo(() => {
        return submission.error
    })

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {

    })

    return (
        <TerminalLayout {...props}>
            <div class={'flex flex-col gap-6'}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>EMAIL </label><input class="bg-gray-300/20 w-full sm:w-full" type="email"/></div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <label>PASSWORD </label><input class="bg-gray-300/20 w-full sm:w-full" type="password"/>
                </div>

                <div class={"w-full flex justify-end"}>
                    <A class="button" href="/">Cancel</A>
                    <input type="submit" value="Submit"/>
                </div>
            </div>


        </TerminalLayout>


    );
}

export default Home;