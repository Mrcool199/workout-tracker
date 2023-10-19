"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { workoutIdSchema, workouts, WorkoutId } from "@/lib/db/schema/workout";

export const getWorkouts = async () => {
  const c = await db.select().from(workouts);
  return { workouts: c };
};

export const getWorkoutById = async (id: WorkoutId) => {
  const { id: workoutId } = workoutIdSchema.parse({ id });
  const [c] = await db.select().from(workouts).where(eq(workouts.id, workoutId));

  return { workout: c };
};