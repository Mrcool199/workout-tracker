import React from "react";

import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopUp({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="ml-4 text-gray-500 text-xs">Click here for first entry</p>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">First Entry :</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-row gap-10">
                <Label htmlFor="width">Exercise:</Label>
                <Label>{label}</Label>
              </div>
              <div className="flex flex-row gap-6">
                <Label htmlFor="width">Description</Label>
                <Label>{value}</Label>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
