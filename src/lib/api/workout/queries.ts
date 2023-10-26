"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { users} from "@/lib/db/schema/auth";
import { workoutIdSchema, workouts, WorkoutId } from "@/lib/db/schema/workout";
import { getUserAuth } from "@/lib/auth";

export const getWorkouts = async () => {
  const {session} = await getUserAuth()
  if(!session){
    return {error:"not logged in"}
  }
  const w = await db.select().from(workouts).where(eq(workouts.userId,session.user.id));
  return { workouts: w };
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
