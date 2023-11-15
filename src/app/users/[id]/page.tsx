import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { loginIsRequiredServer } from "@/lib/auth";
import { getUserById, getUsers, getWorkouts } from "@/lib/api/workout/queries";

export default async function User({
  params: { id },
}: {
  params: { id: string };
}) {
  await loginIsRequiredServer();
  const { error, workouts } = await getWorkouts(id);
  const user = await getUserById(id);
  const disabled = true;
  return (
    <div>
      <MenuButton
        user={user}
        hidden="https://workout-tracker-mjens3ubz-mathews-projects-ece12da2.vercel.app"
        buttonName="Home"
      />

      {error ? (
        `error:${error}`
      ) : (
        <NavBar workouts={workouts ?? []} disable={disabled} />
      )}
    </div>
  );
}
