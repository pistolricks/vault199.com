import Cookies from "cookies-ts"
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib/index";
import {handleUserName} from "~/lib/utils";
const cookies = new Cookies()
cookies.config({ expires: "30d" })

export type SessionUser = {
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    display_name: string | undefined;
    activated: boolean | undefined;
    created_at: string | undefined;
    token: string | undefined;

}


export function getSession() {
    "use server";

    return cookies.get('user');
}

export async function updateSessionUser(user: USER, authentication_token: AUTHENTICATION_TOKEN, folder: string) {
    console.log('updateSessionUser', user, authentication_token)
    const update_user = {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        display_name: handleUserName(user?.name),
        activated: user?.activated,
        created_at: user?.created_at,
        token: authentication_token.token,
    }

    try {
        cookies.set('user', update_user);
        cookies.set('token', authentication_token.token);
        console.log(cookies.get('user'))

    } catch (err) {
        return err as Error;
    }

    return cookies.get('user');
}


export async function getSessionUser() {
    return cookies.get('user');
}

export async function getSessionToken(): Promise<string | undefined> {
    return cookies.get('token');
}



export async function clearSessionUser() {
    try {
        cookies.remove('user');
        cookies.remove('token');

    } catch (err) {
        return err as Error;
    }
}