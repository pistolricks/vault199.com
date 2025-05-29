import {type Component, createEffect, Suspense} from 'solid-js';
import {RouteSectionProps} from '@solidjs/router';
import Cookies from "cookies-ts";
import {createBreakpoints} from "@solid-primitives/media";


export const cookies = new Cookies()
cookies.config({expires: "30d"})


export const currentUser = () => {
    const id = () => cookies.get('id');
    const name = () => cookies.get('name');
    const username = () => cookies.get('username');
    const email = () => cookies.get('email');
    const bio = () => cookies.get('bio');
    const active = () => Boolean(cookies.get('active'));
    const created_at = () => cookies.get('created_at');
    const updated_at = () => cookies.get('updated_at');
    const token = () => cookies.get('token');


    return {
        id,
        name,
        username,
        email,
        bio,
        active,
        created_at,
        updated_at,
        token
    }
}

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px"
};


export const matches = createBreakpoints(breakpoints);


const App: Component<RouteSectionProps> = (props) => {

    createEffect(() => {
        console.log(matches.sm); // true when screen width >= 640px
        console.log(matches.md);
        console.log(matches.lg); // true when screen width >= 1024px
        console.log(matches.xl); // true when screen width >= 1280px
        console.log(matches.xxl);
    });

    return (
        <>
            <main class={'scrollbar-hide'}>
                <Suspense>{props.children}</Suspense>
            </main>
        </>
    );
};

export default App;