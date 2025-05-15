import {Component, createEffect, createMemo} from "solid-js";
import {loginUserHandler, logoutUserHandler} from "~/lib/users";
import {useNavigate, useSubmission} from "@solidjs/router";
import styles from "~/components/layouts/terminal/style.module.css"

type PROPS = {}

const Logout: Component<PROPS> = props => {
    const submission = useSubmission(logoutUserHandler);

    const navigate = useNavigate();

    const errors = createMemo(() => {
        return submission.error
    })

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        console.log(results(), "results")
        if (results() === true) {
            navigate("/login")
        }
    })

    return (
        <form class={''} action={logoutUserHandler} method={'post'}>
            <button class={styles.button} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5}
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
                </svg>
            </button>
        </form>
    );
};

export default Logout;