import {clearSessionUser, getSessionToken} from "~/lib/session";
import {query, redirect} from "@solidjs/router";
import {AUTHENTICATION_TOKEN} from "~/lib/index";


export async function logout(token: string) {
    await clearSessionUser();

    throw redirect("/login");

}

export const getUserToken = query(async () => {
    console.log("getUserToken")
    return (await getSessionToken() as unknown as AUTHENTICATION_TOKEN);
}, 'token')


