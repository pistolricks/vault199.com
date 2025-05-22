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
    active: boolean | undefined;
    created_at: string | undefined;
    updated_at: string | undefined;
    token: string | undefined;

}


export function getSession() {
    "use server";

    return {
        id: cookies.get('id'),
        name: cookies.get('name'),
        username: cookies.get('username'),
        email: cookies.get('email'),
        bio: cookies.get('bio'),
        active: cookies.get('active'),
        created_at: cookies.get('created_at'),
        updated_at: cookies.get('updated_at'),
        token: cookies.get('token'),
    };
}

export async function updateSessionUser(user: USER, authentication_token: AUTHENTICATION_TOKEN) {
    console.log('updateSessionUser', user, authentication_token)


    try {
        cookies.set('id',  user?.id);
        cookies.set('name',  user?.username);
        cookies.set('username',  user?.username);
        cookies.set('email',  user?.email);
        cookies.set('bio',  user?.bio);
        cookies.set('active',  user?.active);
        cookies.set('created_at',  user?.created_at);
        cookies.set('updated_at',  user?.updated_at);
        cookies.set('token',  authentication_token.token);



    } catch (err) {
        return err as Error;
    }

    return  {
        id: cookies.get('id'),
        name: cookies.get('name'),
        username: cookies.get('username'),
        email: cookies.get('email'),
        bio: cookies.get('bio'),
        active: cookies.get('active'),
        created_at: cookies.get('created_at'),
        updated_at: cookies.get('updated_at'),
        token: cookies.get('token'),
    };
}


export async function getSessionUser() {
    return  {
        id: cookies.get('id'),
        name: cookies.get('name'),
        username: cookies.get('username'),
        email: cookies.get('email'),
        bio: cookies.get('bio'),
        active: cookies.get('active'),
        created_at: cookies.get('created_at'),
        updated_at: cookies.get('updated_at'),
        token: cookies.get('token'),
    };
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
        cookies.remove('active');
        cookies.remove('created_at');
        cookies.remove('updated_at');
        cookies.remove('token');


    } catch (err) {
        return err as Error;
    }
}