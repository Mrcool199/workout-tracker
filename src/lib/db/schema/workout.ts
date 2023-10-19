import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const workouts = sqliteTable("workout", {
  id: integer("id").primaryKey(),
  firstWorkout: text("firstWorkout").notNull(),
  firstDesciption: text("firstDesciption").notNull(),
  lastWorkout: text("lastWorkout").notNull(),
  lastDescription: text("lastDescription").notNull(),
  muscleGroup: text("muscleGroup").notNull(),
});
// Schema for CRUD - used to validate API requests
export const insertWorkoutSchema = createInsertSchema(workouts);
export const selectWorkoutSchema = createSelectSchema(workouts);
export const workoutIdSchema = selectWorkoutSchema.pick({ id: true });
export const updateWorkoutSchema = selectWorkoutSchema;

export type Workout = z.infer<typeof selectWorkoutSchema>;
export type NewWorkout = z.infer<typeof insertWorkoutSchema>;
export type WorkoutId = z.infer<typeof workoutIdSchema>["id"];