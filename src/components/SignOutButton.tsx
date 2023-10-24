"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  function handleSignOut() {
    signOut();
  }
  return (
    <div className="flex flex-col gap-2 m-4">
      <Button onClick={handleSignOut} variant={"destructive"}>
        Sign out
      </Button>
    </div>
  );
}
