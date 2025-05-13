import {action} from "@solidjs/router";

export const loginUserHandler = action(async (data: FormData) => {
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }
    
})

