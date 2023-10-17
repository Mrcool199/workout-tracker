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
  const [workouts, setWorkouts] = useState<WorkoutTask[]>([]);

  function addWorkout() {
    setWorkouts([...workouts, { label: "", value: "" }]);
  }

  function editWorkout(
    index: number,
    editedLabel: string,
    editedValue: string
  ) {
    workouts[index] = { label: editedLabel, value: editedValue };
    setWorkouts([...workouts]);
  }
  function deleteWorkout(index: number) {
    workouts.splice(index, 1);
    setWorkouts([...workouts]);
  }

  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-row justify-between items-center mx-4">
        <b className="text-gray-700">{heading}</b>
        <Button onClick={addWorkout} variant="ghost" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        {workouts.map((element, i) => (
          <WorkoutDialog
            key={i}
            label={element.label}
            value={element.value}
            index={i}
            editWorkout={editWorkout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </div>
    </div>
  );
}
