import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { loginIsRequiredServer } from "@/lib/auth";
import { getWorkouts } from "@/lib/api/workout/queries";

export default async function Home() {
  await loginIsRequiredServer();
  const { error, workouts } = await getWorkouts();

  return (
    <div>
      <MenuButton hidden="/group" buttonName="Friends" />

      {error ? `error:${error}` : <NavBar workouts={workouts ?? []} />}
    </div>
  );
}
