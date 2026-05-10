import { createAuthClient } from "better-auth/client"
import { env } from "./env";
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: env.DATABASE_URL || "",
})

