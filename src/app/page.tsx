import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";
import { loginIsRequiredServer } from "@/lib/auth";

export default async function Home() {
  await loginIsRequiredServer();

  return (
    <div>
      <MenuButton hidden="/group" buttonName="Friends" />
      <NavBar />
    </div>
  );
}
