import { CreateDayBar } from "@/components/DayBar";
import { MenubarDemo } from "@/components/MenuBar";
import { CreateNavBar } from "@/components/NavBar";
import { CreateWorkoutsSection } from "@/components/WorkoutsSection";

export default function Home() {
  return (
    <div>
      <CreateNavBar />
      <MenubarDemo />
      <CreateDayBar />
      <CreateWorkoutsSection />
    </div>
  );
}
