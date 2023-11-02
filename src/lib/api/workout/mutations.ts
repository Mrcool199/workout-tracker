"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NewWorkout, insertWorkoutSchema, workouts, workoutIdSchema, WorkoutId, UpdateWorkout } from "@/lib/db/schema/workout";
import { getUserAuth } from "@/lib/auth";

export const createWorkout = async (workout: NewWorkout) => {
  const {session} = await getUserAuth()
  if(!session){
    return {error:"not logged in"}
  }
  const newWorkout = insertWorkoutSchema.parse(workout);
  try {
    const [c] =  await db.insert(workouts).values({
      firstWorkout: workout.firstWorkout,
      firstDescription: workout.firstDescription,
      lastWorkout: workout.firstWorkout,
      lastDescription: workout.firstDescription,
      muscleGroup: workout.muscleGroup,
      userId: session.user.id,
      firstDate: workout.firstDate
    }).returning();
    return { workout: c }
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    return { error: message };
  }
};

export const updateWorkout = async (id: WorkoutId, workout: UpdateWorkout) => {
  try {
    const [w] = await db
     .update(workouts)
     .set(workout)
     .where(eq(workouts.id, id)).returning();
    return { workout: w };
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