import {baseApi} from "~/lib/server";

export type USER = {
    id: number;
    name: string;
    email: string;
    activated: boolean;
    created_at: string;
    token: string;
}

/*USER*/
const fetchRegister = async (userInput: { name: string, email: string, password: string }) =>
    (await fetch(`http://localhost:4040/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",

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

const fetchLogin = async (userInput: { email: string, password: string }) =>
    (await fetch(`${baseApi}/tokens/authentication`, {
            method: "POST",
            body: JSON.stringify(userInput),
        })
    ).json()

const fetchLogout = async () =>
    (await fetch(`${baseApi}/users/logout`, {
            method: "POST",
        })
    ).json()

const fetchUser = async (userInput: { email: string, token: string }) =>
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
        async register({where: {userInput}}: { where: { userInput: { name: string; email: string; password: string } }
        }) {
            return await fetchRegister(userInput);
        },
        async activate({where: {activateInput}}: { where: { activateInput: { token: string }; } }) {
            return await fetchActivate(activateInput);
        },
        async resendActivateEmail({where: {resendInput}}: { where: { resendInput: { email: string }; } }) {
            return await fetchResendActivateEmail(resendInput);
        },
        async login({where: {userInput}}: { where: { userInput: { email: string; password: string } } }) {
            return await fetchLogin(userInput);
        },
        async logout() {
            return await fetchLogout();
        },
        async findUser({where: {userInput}}: { where: { userInput: { email: string; token: string } } }) {
            return await fetchUser(userInput);
        },
    }
}
