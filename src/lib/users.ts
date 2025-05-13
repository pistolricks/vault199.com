import {action} from "@solidjs/router";
import { SolidAuth } from '@solid-mediakit/auth'
import { authOptions } from './server'
export const loginUserHandler = action(async (data: FormData) => {
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }

})




export const { GET, POST } = SolidAuth(authOptions)
