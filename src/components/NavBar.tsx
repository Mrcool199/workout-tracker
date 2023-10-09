"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function CreateNavBar() {
  const [position, setPosition] = React.useState("Monday");
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <b className="text-lg">Tracking app</b>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Day of the week</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="Monday">Monday</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Tuesday">
              Tuesday
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Wednesday">
              Wednesday
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Thursday">
              Thursday
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Friday">Friday</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Saturday">
              Saturday
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Sunday">Sunday</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
