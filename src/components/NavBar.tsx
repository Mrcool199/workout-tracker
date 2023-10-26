import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";
import { getWorkouts } from "@/lib/api/workout/queries";
import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const muscleGroups = ["Chest", "Legs", "Arms", "Back", "Shoulders"];

export async function NavBar() {
  const { workouts: allWorkouts, error } = await getWorkouts();

  if (error) return <p>error occured: {error}</p>;

  return (
    <Tabs defaultValue="Chest">
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <TabsList className=" justify-between shadow p-2 w-full">
          {muscleGroups.map((muscle, i) => (
            <TabsTrigger className="px-8" key={i} value={muscle}>
              {muscle}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {muscleGroups.map((muscle, i) => (
        <TabsContent key={i} value={muscle}>
          <WorkoutsSection
            workouts={
              allWorkouts?.filter(
                (workout) => workout.muscleGroup === muscle
              ) ?? []
            }
            heading={muscle}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
