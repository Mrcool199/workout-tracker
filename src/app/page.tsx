import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { getWorkouts } from "@/lib/api/workout/queries";

export default async function Home() {
  const { workouts } = await getWorkouts();

  const firstDescription =
    workouts.find((workouts) => workouts.id === 1)?.firstDescription ||
    "Not found";

  return (
    <div>
      <MenuButton />
      <NavBar workouts={workouts} />
    </div>
  );
}
