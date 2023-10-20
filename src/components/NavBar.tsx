"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";
import { Workout } from "@/lib/db/schema/workout";

export function NavBar({ workouts }: { workouts: Workout[] }) {
  return (
    <Tabs defaultValue="chest">
      <TabsList className="  flex flex-row justify-between shadow mb-4">
        <TabsTrigger value="chest">Chest</TabsTrigger>
        <TabsTrigger value="legs">Legs</TabsTrigger>
        <TabsTrigger value="arms">Arms</TabsTrigger>
        <TabsTrigger value="back">Back</TabsTrigger>
      </TabsList>

      <TabsContent value="chest">
        <WorkoutsSection workouts={workouts} heading="Chest" />
      </TabsContent>
      <TabsContent value="legs">
        <WorkoutsSection workouts={workouts} heading="Legs" />
      </TabsContent>
      <TabsContent value="arms">
        <WorkoutsSection workouts={workouts} heading="Arms" />
      </TabsContent>
      <TabsContent value="back">
        <WorkoutsSection workouts={workouts} heading="Back" />
      </TabsContent>
    </Tabs>
  );
}
