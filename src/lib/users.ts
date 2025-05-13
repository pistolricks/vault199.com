import {action, query, redirect} from "@solidjs/router";
import {activateUser, getUserDetails, getUserToken, login, logout, register, resendActivateEmail,} from "~/lib/server";
import {getSessionUser, SessionUser} from "~/lib/session";
import {capitalizeFirstLetter} from "~/lib/utils";

export const getUser = query(async () => {
    let userData = (await getSessionUser()) as unknown as SessionUser;
    console.log("getUser", userData)

    return userData;
}, "user")


export const getUserDetailsHandler = action(async (data: FormData) => {
    let token = await getUserToken();
    if (!token) throw redirect("/")

    const userInput = {
        email: String(data.get("email")),
        token: token.token,
    }
    let res = await getUserDetails(userInput)
    console.log("getUserDetailsHandler", res)
    return res;
})


export const registerUserHandler = action(async (data: FormData) => {
    let fName = String(data.get("firstName"));
    let lName = String(data.get("lastName"));

    let firstName = fName.toLowerCase();
    let lastName = lName.toLowerCase();

    let name = capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName)
    let email = String(data.get("email"));

    const userInput = {
        name: name,
        email: email.toLowerCase(),
        password: String(data.get("password")),
    }

    let res = await register(userInput)
    console.log("registerUserHandler", res)
    if (res.user?.id) throw redirect("/activate")
    else return res;
})

export const activateUserHandler = async (token: string) => {
    const activateInput = {
        token: token,
    }
    return activateUser(activateInput)
}

export const resendActivateEmailHandler = action(async (data: FormData) => {
    const resendInput = {
        email: String(data.get("email")),
    }
    return resendActivateEmail(resendInput)
})

export const loginUserHandler = action(async (data: FormData) => {
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }

    console.log(userInput)
    return await login(userInput)
})

export const logoutUserHandler = action(async () => {
    return await logout()
})
