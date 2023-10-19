import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { getWorkouts } from "@/lib/api/workout/queries";

export default async function Home() {
  const { workouts } = await getWorkouts();

  console.log(workouts);

  const firstDescription =
    workouts.find((workouts) => workouts.id === 1)?.firstDesciption ||
    "Not found";

  return (
    <div>
      <MenuButton />
      <NavBar firstDescription={firstDescription} />
    </div>
  );
}
