"use client";

import { useState } from "react";
import { WorkoutDialog } from "./WorkoutDialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { PopUp } from "./Popup";

type WorkoutTask = {
  label: string;
  value: string;
};

export function WorkoutsSection({ heading }: { heading: string }) {
  const [workouts, setWorkouts] = useState<WorkoutTask[]>([]);

  function addWorkout() {
    setWorkouts([{ label: "", value: "" }, ...workouts]);
  }

  function editWorkout(
    index: number,
    editedLabel: string,
    editedValue: string
  ) {
    setWorkouts((prevWorkouts) => {
      const updatedWorkouts = [...prevWorkouts];
      updatedWorkouts[index] = {
        ...updatedWorkouts[index],
      };
      return updatedWorkouts;
    });
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
          <div key={i}>
            <PopUp label={element.label} value={element.value} index={i} />
            <WorkoutDialog
              label={element.label}
              value={element.value}
              index={i}
              editWorkout={(i, editedLabel, editedValue) =>
                editWorkout(i, editedLabel, editedValue)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
