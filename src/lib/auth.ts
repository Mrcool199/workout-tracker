import nextAuth, { DefaultSession, NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string
    }
  }
}

export const authConfig: NextAuthOptions = {

  adapter: DrizzleAdapter(db),
  callbacks: { 
    session({session,user}) {
      session.user.id = user.id
      return session
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
}

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("http://localhost:3000/api/auth/signin");
}

export function useLoginIsRequiredClient() {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("http://localhost:3000/api/auth/signin");
}

export async function getUserAuth(){
  return {session: await getServerSession(authConfig)}
}