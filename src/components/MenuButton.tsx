"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function CreateNavBar() {
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <b className="text-xl font-sans shadow-sm p-1 text-red-500">
        Workout
        <span className="text-black">Tracker</span>
      </b>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon shadow w-10 h-10 p-0">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col gap-2 m-4">
            <Button variant="destructive">Sign out</Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
