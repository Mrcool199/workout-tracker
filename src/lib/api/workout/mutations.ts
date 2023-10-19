"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NewWorkout, insertWorkoutSchema, workouts, workoutIdSchema, WorkoutId } from "@/lib/db/schema/workout";

export const createWorkout = async (workout: NewWorkout) => {
  const newWorkout = insertWorkoutSchema.parse(workout);
  try {
    const [c] =  await db.insert(workouts).values(newWorkout).returning();
    return { workout: c }
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    return { error: message };
  }
};

export const updateWorkout = async (id: WorkoutId, workout: NewWorkout) => {
  const { id: workoutId } = workoutIdSchema.parse({ id });
  const newWorkout = insertWorkoutSchema.parse(workout);
  try {
    const [c] = await db
     .update(workouts)
     .set(newWorkout)
     .where(eq(workouts.id, workoutId!)).returning();
    return { workout: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again"
    console.error(message);
    return { error: message };
  }
};

export const deleteWorkout = async (id: WorkoutId) => {
  const { id: workoutId } = workoutIdSchema.parse({ id });
  try {
    const [c] = await db.delete(workouts).where(eq(workouts.id, workoutId!)).returning();
    return { workout: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again"
    console.error(message);
    return { error: message };
  }
};