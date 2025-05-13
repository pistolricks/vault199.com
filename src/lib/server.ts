import {db} from "./db";
import {clearSessionUser, getSessionToken, updateSessionUser} from "~/lib/session";
import {query, redirect} from "@solidjs/router";
import {AUTHENTICATION_TOKEN} from "~/lib/index";

export const baseApi = (`http://localhost:${import.meta.env.VITE_SERVER_PORT}/api/${import.meta.env.VITE_API_VERSION}`)

export async function register(userInput: { name: string, email: string, password: string }) {
    const res = await db.user.register({where: {userInput}});
    console.log('register-res', res)
    return res;
}

export async function activateUser(activateInput: { token: string }) {
    const res = await db.user.activate({where: {activateInput}});
    console.log('status', res.status)
    if (res.status === 202) throw redirect("/login");
    else return res;
}

export async function resendActivateEmail(resendInput: { email: string }) {
    const res = await db.user.resendActivateEmail({where: {resendInput}});
    if (res.status === 202) throw redirect("/activate");
    else return res;
}

export async function login(userInput: { email: string, password: string }) {
    const res = await db.user.login({where: {userInput}});
    await updateSessionUser(res.user, res.authentication_token, res.folder)
    if (!res.user.activated) throw redirect("/activate");
    if (res.user.activated) throw redirect("/");
    else return res;

}

export async function logout() {
    await clearSessionUser();
    return await db.user.logout();

}

export const getUserToken = query(async () => {
    console.log("getUserToken")
    return (await getSessionToken() as unknown as AUTHENTICATION_TOKEN);
}, 'token')


export async function getUserDetails(userInput: { email: string, token: string }) {
    const res = await db.user.findUser({where: {userInput}});
    console.log('details-res', res)
    return res;
}