import {Component, createEffect, createMemo, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useSubmission} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import {loginUserHandler} from "~/lib/users";

const Home: Component<RouteSectionProps> = (props) => {
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
            <form class={'flex flex-col gap-6'}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class={'px-1 bg-gray-300/20 w-full'} type="text" required name="firstName" placeholder="First Name"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class={'px-1 bg-gray-300/20 w-full '} type="text" required name="lastName" placeholder="Last Name"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class="px-1 bg-gray-300/20 w-full" required type="email" name="email" placeholder="Email"/>
                </div>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input class="px-1 bg-gray-300/20 w-full" required type="password" name="password" placeholder="Password"/>
                </div>

                <div class={"w-full flex justify-end"}>
                    <A class="button" href="/">Cancel</A>
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Home;