import { MenuButton } from "@/components/MenuButton";
import { NavBar } from "@/components/NavBar";
import { getWorkouts } from "@/lib/api/workout/queries";

export default async function User({
  params: { id },
}: {
  params: { id: string };
}) {
  const { error, workouts } = await getWorkouts(id);

  return (
    <div>
      <MenuButton hidden="/group" buttonName="Friends" />

      {error ? `error:${error}` : <NavBar workouts={workouts ?? []} />}
    </div>
  );
}
