"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { users,accounts,sessions,verificationTokens } from "@/lib/db/schema/auth";
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

export const getUserById = async (userId: string) => {
  // Assuming you have a field "id" in your user schema
  const [user] = await db.select().from(users).where(eq(users.id, userId));
  return user;
};
