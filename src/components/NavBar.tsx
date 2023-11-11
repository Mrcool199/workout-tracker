import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";
import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Workout } from "@/lib/db/schema/workout";

const muscleGroups = ["Chest", "Legs", "Arms", "Back", "Shoulders", "Cardio"];

export async function NavBar({
  workouts,
  disable,
}: {
  workouts: Workout[];
  disable: boolean;
}) {
  return (
    <Tabs defaultValue="Chest">
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <TabsList className=" shadow px-2 py-6 w-full ">
          {muscleGroups.map((muscle, i) => (
            <TabsTrigger className="px-10" key={i} value={muscle}>
              {muscle}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {muscleGroups.map((muscle, i) => (
        <TabsContent key={i} value={muscle} className="max-w-lg mx-auto">
          <WorkoutsSection
            workouts={
              workouts.filter((workout) => workout.muscleGroup === muscle) ?? []
            }
            heading={muscle}
            disabled={disable}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
