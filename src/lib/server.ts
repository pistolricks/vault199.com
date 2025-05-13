import { type SolidAuthConfig } from '@solid-mediakit/auth'
import Credentials from '@auth/core/providers/credentials'
import { z } from 'zod'
declare module '@auth/core/types' {
    export interface Session {
        user: NonNullable<DefaultSession['user']>
    }
}

import { CredentialsSignin } from '@solid-mediakit/auth'
class InvalidLoginError extends CredentialsSignin {
    code = 'No Such User'
}

const zSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(4),
})

export const authOptions: SolidAuthConfig = {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const zData = await zSchema.safeParseAsync(credentials)
                if (!zData.success) {
                    throw new InvalidLoginError()
                }
                return {
                    name: zData.data.email.split('@')[0],
                    email: zData.data.email,
                }
            },
        }),
    ],
    debug: false,
    basePath: import.meta.env.VITE_AUTH_PATH,
}