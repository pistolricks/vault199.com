import {baseApi} from "~/lib/server";
import {cookies, currentUser} from "~/app";
import {getSessionToken, getSessionUser} from "~/lib/session";
import Cookies from "cookies-ts";

export type USER = {
    id: number;
    name: string;
    username: string;
    email: string;
    bio?: string;
    active?: boolean;
    created_at: string;
    updated_at?: string;
    token: string;
}

/*USER*/
const fetchRegister = async (userInput: { name: string, username: string, email: string, password: string }) =>
    (await fetch(`${baseApi}/users`, {
            method: "POST",
            headers: {
                "origin": import.meta.env.VITE_APP_URL,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
    ).json()

const fetchUserUpdate = async (userInput: { id: number, name: string, username: string, email: string, bio: string, active: boolean }) =>
    (await fetch(`${baseApi}/users/${userInput.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${cookies.get("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
    ).json()

const fetchActivate = async (activateInput: { token: string }) =>
    (await fetch(`${baseApi}/users/activated`, {
            method: "PUT",
            body: JSON.stringify(activateInput),
        })
    ).json()

const fetchResendActivateEmail = async (resendInput: { email: string }) =>
    (await fetch(`${baseApi}/tokens/activation`, {
            method: "POST",
            body: JSON.stringify(resendInput),
        })
    ).json()

const fetchLogin = async (userInput: { username: string, password: string }) =>
    (await fetch(`${baseApi}/tokens/authentication`, {
            method: "POST",
            body: JSON.stringify(userInput),
        })
    ).json()

const fetchLogout = async (token: string) =>

    (await fetch(`${baseApi}/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })
    ).json()

const fetchUser = async (userInput: { username: string, token: string }) =>
    (await fetch(`${baseApi}/users/find`, {
            headers: {
                Authorization: `Bearer ${userInput.token}`
            },
            method: "POST",
            body: JSON.stringify(userInput),
        })
    ).json()



export const db = {
    user: {
        async register({where: {userInput}}: { where: { userInput: { name: string; username: string, email: string; password: string } }
        }) {
            return await fetchRegister(userInput);
        },
        async update({where: {userInput}}: { where: { userInput: { id: number, name: string; username: string, email: string; bio: string, active: boolean } }
        }) {
            return await fetchUserUpdate(userInput);
        },
        async activate({where: {activateInput}}: { where: { activateInput: { token: string }; } }) {
            return await fetchActivate(activateInput);
        },
        async resendActivateEmail({where: {resendInput}}: { where: { resendInput: { email: string }; } }) {
            return await fetchResendActivateEmail(resendInput);
        },
        async login({where: {userInput}}: { where: { userInput: { username: string; password: string } } }) {
            console.log("login", userInput)
            return await fetchLogin(userInput);
        },
        async logout(token: string) {
            console.log("logout", token)
            return await fetchLogout(token);
        },
        async findUser({where: {userInput}}: { where: { userInput: { username: string; token: string } } }) {
            return await fetchUser(userInput);
        },
    }
}
