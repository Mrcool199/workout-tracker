import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Create a SQL client using createClient
export const sqliteClient = createClient({
  url: process.env.DATABASE_URL as string,
  authToken: process.env.DATABASE_AUTH_TOKEN as string,
});

const drizzleInstance = drizzle(sqliteClient);

export const sqlite = sqliteClient;
export const db = drizzleInstance;
