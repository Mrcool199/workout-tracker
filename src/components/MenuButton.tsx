import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { SignOutButton } from "./SignOutButton";

export async function MenuButton() {
  const session = await getServerSession(authConfig);

  return (
    <div className="flex flex-row justify-between items-center m-4">
      <b className="text-xl font-sans shadow-sm p-1 text-red-500">
        Workout
        <span className="text-black">Tracker</span>
      </b>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon shadow w-10 h-10 p-0">
            <img src={session?.user?.image ?? ""} alt="" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
