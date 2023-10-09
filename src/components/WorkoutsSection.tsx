"use client";

import { WorkoutDialog } from "./WorkoutDialog";

type WorkoutTask = {
  label: string;
  value: string;
};

export function CreateWorkoutsSection() {
  const workouts: WorkoutTask[] = [
    {
      label: "New Workout",
      value: "icon",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2">
      {workouts.map((element, i) => (
        <WorkoutDialog key={i} workoutData={{ label: element.label }} />
      ))}
    </div>
  );
}
