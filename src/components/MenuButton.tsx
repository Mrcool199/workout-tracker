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
import { ModeToggle } from "@/components/DarkModeButton";
import { ChatRoom } from "./ChatRoom";

export async function MenuButton() {
  const session = await getServerSession(authConfig);

  return (
    <div className="flex flex-row justify-between items-center m-4">
      <b className="text-2xl font-sans shadow-sm ">
        <span className="text-red-700">Workout</span>
        Tracker
      </b>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon shadow w-10 h-10 p-0">
            <img src={session?.user?.image ?? ""} alt="" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <div className="flex flex-row justify-between items-center">
            <DropdownMenuLabel className="pl-4 justify-center">
              Menu
            </DropdownMenuLabel>
            <div className="justify-center">
              <ModeToggle />
            </div>
          </div>
          <DropdownMenuSeparator />
          <ChatRoom />
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
