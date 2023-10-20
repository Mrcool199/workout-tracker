"use client";

import { useState } from "react";
import { WorkoutDialog } from "./WorkoutDialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { createWorkout, updateWorkout } from "@/lib/api/workout/mutations";
import { useRouter } from "next/navigation";
import { Workout, workouts } from "@/lib/db/schema/workout";

export function WorkoutsSection({
  workouts,
  heading,
}: {
  workouts: Workout[];
  heading: string;
}) {
  const { refresh: refreshPage } = useRouter();

  async function addWorkout() {
    const { error } = await createWorkout({
      firstWorkout: "",
      firstDescription: "",
      lastWorkout: "",
      lastDescription: "",
      muscleGroup: heading,
    });

    if (error) {
      alert(`an error occured: ${error}`);
      return;
    }

    refreshPage();
  }

  async function editWorkout(workout: Workout) {
    const { error } = await updateWorkout(workout.id, workout);

    if (error) {
      alert(`an error occured: ${error}`);
      return;
    }

    refreshPage();

    // workouts[index] = { label: editedLabel, value: editedValue };
    // setWorkouts([...workouts]);
  }
  function deleteWorkout(index: number) {
    workouts.splice(index, 1);
    // setWorkouts([...workouts]);
  }

  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-row justify-between items-center mx-4">
        <b className="text-lg shadow-sm">{heading}</b>
        <Button onClick={addWorkout} variant="ghost" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        {/* for workout in workouts */}
        {workouts.map((workout) => (
          <WorkoutDialog
            key={workout.id}
            workout={workout}
            editWorkout={editWorkout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </div>
    </div>
  );
}
