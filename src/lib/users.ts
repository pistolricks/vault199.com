import {action, query, redirect} from "@solidjs/router";
import {
    activateUser,
    getUserDetails,
    getUserToken,
    login,
    logout,
    register,
    resendActivateEmail,
    updateUser,
} from "~/lib/server";
import {getSessionUser, SessionUser, updateSessionUser} from "~/lib/session";
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
        username: String(data.get("username")),
        token: token.token,
    }
    let res = await getUserDetails(userInput)
    console.log("getUserDetailsHandler", res)
    return res;
})


export const registerUserHandler = action(async (data: FormData) => {
    let fName = String(data.get("firstName"));
    let lName = String(data.get("lastName"));
    let username = String(data.get("username"));

    let firstName = fName.toLowerCase();
    let lastName = lName.toLowerCase();

    let name = capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName)
    let email = String(data.get("email"));

    const userInput = {
        name: name,
        username: username,
        email: email.toLowerCase(),
        password: String(data.get("password")),
    }

    let res = await register(userInput)
    console.log("registerUserHandler", res)
    if(res.user?.id) throw redirect("/login")
    // if (res.user?.id) throw redirect("/activate")
    else return res;
})

export const updateUserHandler = async (data: FormData) => {
    let id = Number(data.get("id"));
    let name = String(data.get("name"));
    let username = String(data.get("username"));
    let email = String(data.get("email"));
    let bio = String(data.get("bio")) ?? "";
    let active = Boolean(data.get("active"));
    let token = String(data.get("token"));

    const userInput = {
        id: id,
        name: name,
        username: username,
        email: email.toLowerCase(),
        bio: bio,
        active: active,
        token: token
    }

    let res = await updateUser(userInput)
    console.log("updateUser", res)


    // if (res.user?.id) throw redirect("/activate")
    return res;
}


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