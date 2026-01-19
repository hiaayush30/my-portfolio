import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    // baseURL: process.env.NEXT_APP_URL || "http://127.0.0.1:3000"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()