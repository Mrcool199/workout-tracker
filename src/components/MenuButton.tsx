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
import Link from "next/link";
import Image from "next/image";

export async function MenuButton({
  hidden,
  buttonName,
  user,
}: {
  hidden: string;
  buttonName: string;
  user?: any;
}) {
  const session = await getServerSession(authConfig);

  return (
    <div className="flex flex-row justify-between items-center m-4">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="icon shadow-md w-10 h-10 p-0 ">
              <Image
                className="rounded-lg"
                src={user?.image ?? ""}
                alt=""
                width={"100"}
                height={"100"}
              />
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
            <ChatRoom hide="/api/auth/signin/users" buttonName="Friends" />
            <SignOutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
      <Link href="/">
        <b className="text-2xl font-sans shadow-sm ">
          <span className="text-red-700">Workout</span>
          Tracker
        </b>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon w-10 h-10 p-0 shadow-md">
            <Image
              className="rounded-lg"
              src={session?.user?.image ?? ""}
              alt=""
              width={"100"}
              height={"100"}
            />
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
          <ChatRoom hide={hidden} buttonName={buttonName} />
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
