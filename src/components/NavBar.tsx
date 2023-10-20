import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";
import { getWorkouts } from "@/lib/api/workout/queries";

const muscleGroups = ["Chest", "Legs", "Arms", "Back", "Shoulders"];

export async function NavBar() {
  const { workouts: allWorkouts } = await getWorkouts();
  return (
    <Tabs defaultValue="chest">
      <TabsList className="  flex flex-row justify-between shadow mb-4">
        {muscleGroups.map((muscle, i) => (
          <TabsTrigger key={i} value={muscle}>
            {muscle}
          </TabsTrigger>
        ))}
      </TabsList>

      {muscleGroups.map((muscle, i) => (
        <TabsContent key={i} value={muscle}>
          <WorkoutsSection
            workouts={allWorkouts.filter(
              (workout) => workout.muscleGroup === muscle
            )}
            heading={muscle}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
