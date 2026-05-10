// This file is used to create a singleton instance of the PrismaClient and export it for use in other parts of the application. It also uses the PrismaPg adapter to connect to a PostgreSQL database using the connection string provided in the environment variable DATABASE_URL. The instance is stored in a global variable to ensure that only one instance is created during development, while in production, a new instance is created each time.
// This file created because of the error "PrismaClient is not a constructor" when trying to import PrismaClient directly from the generated client. By using the adapter, we can ensure that the correct instance of PrismaClient is created and exported for use in the application. and avoid the pooling issues that can arise when creating multiple instances of PrismaClient in development.

import { PrismaClient } from "../../generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
});

declare global {
    var __prisma: PrismaClient | undefined;
}

// First this is to check if there is already an instance of PrismaClient stored in the global variable __prisma. If there is, it uses that instance. If not, it creates a new instance of PrismaClient using the adapter and assigns it to the global variable __prisma. This way, during development, only one instance of PrismaClient is created and reused across the application, while in production, a new instance is created each time.
export const prisma = globalThis.__prisma || new PrismaClient({ adapter });

// Finally, if the application is running in development mode (i.e., NODE_ENV is not set to "production"), it assigns the created PrismaClient instance to the global variable __prisma. This allows the instance to be reused across the application during development, preventing issues with multiple instances and connection pooling. In production, this step is skipped, and a new instance is created each time the module is imported.
if (env.NODE_ENV !== "production") {
    globalThis.__prisma = prisma;
}