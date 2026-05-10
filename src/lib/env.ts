import { z } from 'zod'

const envSchema = z.object({
    // --- Server-side Variables ---
    // These will ONLY be available on the server. 
    // Accessing them on the client will result in undefined or an error.
    DATABASE_URL: z.string().url(),
    BETTER_AUTH_URL: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),

    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

    // --- Client-side Variables ---
    // Must be prefixed with VITE_ to be exposed to the browser.
    VITE_BASE_URL: z.string().url().default("http://localhost:3000"),
})

// Unified Source: Checks process.env first, then falls back to import.meta.env
// This covers both Node.js runtimes and Vite's client-side bundling
const getEnvSource = () => {
    if (typeof process !== 'undefined' && process.env && Object.keys(process.env).length > 0) {
        return process.env;
    }
    return (import.meta as any).env;
}

// Validate the unified environment source against the schema
const _env = envSchema.safeParse(getEnvSource());

if (!_env.success) {
    // We use console.error to show exactly which key failed in the terminal
    console.error('Invalid environment variables:', JSON.stringify(_env.error.format(), null, 2))
    throw new Error('Invalid environment variables')
}

export const env = _env.data