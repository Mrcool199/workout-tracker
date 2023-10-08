"use client";

import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Edit3Icon } from "lucide-react";

export function CreateWorkoutsSection() {
  return (
    <div className="font-light flex flex-col gap-2 m-4">
      <div className="pt-2 pl-1 text-xs">Old Workout</div>
      <Button variant="secondary" className="justify-between border-b-2">
        New workout
        <Edit3Icon />
      </Button>
      <div className="pt-2 pl-1 text-xs">Old Workout</div>
      <Button variant="secondary" className="justify-between border-b-2">
        New workout <Edit3Icon />
      </Button>
    </div>
  );
}
