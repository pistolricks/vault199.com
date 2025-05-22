import {db} from "./db";
import {clearSessionUser, getSessionToken, updateSessionUser} from "~/lib/session";
import {query, redirect} from "@solidjs/router";
import {AUTHENTICATION_TOKEN} from "~/lib/index";
import { cookies } from "~/app";

// export const devApi = (`http://localhost:${import.meta.env.VITE_SERVER_PORT}/api/${import.meta.env.VITE_API_VERSION}`)
export const baseApi = (`${import.meta.env.VITE_API_PRODUCTION_PATH}/api/${import.meta.env.VITE_API_VERSION}`)

export async function register(userInput: { name: string, username: string, email: string, password: string }) {
    const res = await db.user.register({where: {userInput}});
    console.log('register-res', res)
    return res;
}

export async function updateUser(userInput: { id: number, name: string, username: string, email: string, bio: string, active: boolean }) {
    const res = await db.user.update({where: {userInput}});
    console.log('register-res', res?.user)
    return res?.user;
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

export async function login(userInput: { username: string, password: string }) {
    const res = await db.user.login({where: {userInput}});
    console.log('login-res', res)
    await updateSessionUser(res.user, res.auth_token)
    console.log("cookies.auth_token", cookies.get('token'))

   throw redirect("/");


}

export async function logout(token: string) {
    await clearSessionUser();
    let res = await db.user.logout(token);
    throw redirect("/login");

}

export const getUserToken = query(async () => {
    console.log("getUserToken")
    return (await getSessionToken() as unknown as AUTHENTICATION_TOKEN);
}, 'token')


export async function getUserDetails(userInput: { username: string, token: string }) {
    const res = await db.user.findUser({where: {userInput}});
    console.log('details-res', res)
    return res;
}