import { NavBar } from "@/components/NavBar";
import { MenuButton } from "@/components/MenuButton";

export default async function Home() {
  return (
    <div>
      <MenuButton />
      <NavBar />
    </div>
  );
}
