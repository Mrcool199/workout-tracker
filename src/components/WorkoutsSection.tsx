"use client";

import { useState } from "react";
import { WorkoutDialog } from "./WorkoutDialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type WorkoutTask = {
  label: string;
  value: string;
};

export function WorkoutsSection({ heading }: { heading: string }) {
  const [workouts, setWorkouts] = useState<WorkoutTask[]>([
    {
      label: "New Workout",
      value: "icon",
    },
  ]);

  function addWorkout() {
    setWorkouts([{ label: "New Workout", value: "sda" }, ...workouts]);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2">
      <div className="flex flex-row justify-between items-center m-4">
        <b className="text-gray-700">{heading}</b>
        <Button onClick={addWorkout} variant="ghost" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      {workouts.map((element, i) => (
        <WorkoutDialog key={i} workoutData={{ label: element.label }} />
      ))}
    </div>
  );
}
