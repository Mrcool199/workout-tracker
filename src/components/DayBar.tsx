"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreateDayBar() {
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <b className="text-gray-700">Monday</b>
      <Button variant="ghost" size="icon">
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}
