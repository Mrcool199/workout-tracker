import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { and, eq } from "drizzle-orm";
import { accounts, users } from "@/lib/db/schema/auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

export const authConfig: NextAuthOptions = {
  debug: true,
  adapter: {
    // @ts-expect-error
    ...DrizzleAdapter(db),
    async getUserByAccount(providerAccountId) {
      const results = await db
        .select()
        .from(accounts)
        .leftJoin(users, eq(users.id, accounts.userId))
        .where(
          and(
            eq(accounts.provider, providerAccountId.provider),
            eq(accounts.providerAccountId, providerAccountId.providerAccountId)
          )
        )
        .get();

      return results?.user ?? null;
    },
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("http://localhost:3000/api/auth/signin");
}

export function useLoginIsRequiredClient() {
  const session = useSession();
  const router = useRouter();
  if (!session) router.push("http://localhost:3000/api/auth/signin");
}

export async function getUserAuth() {
  return { session: await getServerSession(authConfig) };
}
