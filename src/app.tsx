import {type Component, createMemo, createSignal, Suspense} from 'solid-js';
import {RouteSectionProps, useLocation} from '@solidjs/router';
import Cookies from "cookies-ts";


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


const App: Component<RouteSectionProps> = (props) => {

    return (
        <>
            <div class="min-h-dvh h-dvh flex flex-col w-screen">

                <main class={'scrollbar-hide'}>
                    <Suspense>{props.children}</Suspense>
                </main>
            </div>


        </>
    );
};

export default App;