import Cookies from "cookies-ts"
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib/index";
import {handleUserName} from "~/lib/utils";
import {cookies} from "~/app";

export type SessionUser = {
    id: number | undefined;
    name: string | undefined;
    username: string | undefined;
    email: string | undefined;
    bio: string | undefined;
    created_at: string | undefined;
    updated_at: string | undefined;
    token: string | undefined;

}


export function getSession() {
    "use server";

    return cookies.get('user');
}

export async function updateSessionUser(user: USER, authentication_token: AUTHENTICATION_TOKEN) {
    console.log('updateSessionUser', user, authentication_token)
    const update_user = {
        id: user?.id,
        name: user?.username,
        username: user?.username,
        email: user?.email,
        bio: user?.bio,
        created_at: user?.created_at,
        updated_at: user?.updated_at,
        token: authentication_token.token,
    }

    try {
        cookies.set('id', update_user.id);
        cookies.set('name', update_user.name);
        cookies.set('username', update_user.username);
        cookies.set('email', update_user.email);
        cookies.set('bio', update_user.bio);
        cookies.set('created_at', update_user.created_at);
        cookies.set('updated_at', update_user.updated_at);
        cookies.set('token', update_user.token);



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
        cookies.remove('id');
        cookies.remove('name');
        cookies.remove('username');
        cookies.remove('email');
        cookies.remove('bio');
        cookies.remove('created_at');
        cookies.remove('updated_at');
        cookies.remove('token');


    } catch (err) {
        return err as Error;
    }
}