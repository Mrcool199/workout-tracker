import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { loginIsRequiredServer } from "@/lib/auth";
import { getMyWorkouts, getWorkouts } from "@/lib/api/workout/queries";

export default async function Home() {
  await loginIsRequiredServer();
  const { error, workouts } = await getMyWorkouts();
  const disabled = false;
  return (
    <div>
      <MenuButton hidden="/users" buttonName="Friends" />

      {error ? (
        `error:${error}`
      ) : (
        <NavBar workouts={workouts ?? []} disable={disabled} />
      )}
    </div>
  );
}
