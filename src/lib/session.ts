import {AUTHENTICATION_TOKEN} from "~/lib/index";


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

    };
}

export async function updateSessionUser(authentication_token: AUTHENTICATION_TOKEN) {
    console.log('updateSessionUser',  authentication_token)


    try {


    } catch (err) {
        return err as Error;
    }

    return  {

    };
}


export async function getSessionUser() {
    return  {
    };
}

export async function getSessionToken(): Promise<string | undefined> {
    return ""
}



export async function clearSessionUser() {
    try {


    } catch (err) {
        return err as Error;
    }
}