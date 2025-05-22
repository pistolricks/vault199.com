import {Component, createEffect, createMemo} from "solid-js";

import {action, redirect, useNavigate, useSubmission} from "@solidjs/router";
import styles from "~/components/layouts/terminal/style.module.css"
import {currentUser} from "~/app";
import {logout} from "~/lib";

type PROPS = {
    token: string;
    class?: string;
}

const Logout: Component<PROPS> = props => {

    const className = () => props.class ?? '';

    const handleLogout = action(async() => {
        const token = props.token;
        let res = await logout(token)


    })

    const submission = useSubmission(handleLogout);

    const errors = createMemo(() => {
        return submission.error
    })

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        console.log(results(), "results")
    })

    return (
        <form class={className()} action={handleLogout} method={'post'}>
            <button class={styles.button} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5}
                     stroke="currentColor" class={"size-4"}>
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
                </svg>
            </button>
        </form>
    );
};

export default Logout;