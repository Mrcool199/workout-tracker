import { MenuButton } from "@/components/MenuButton";
import { SearchBar } from "@/components/SearchBar";
import { loginIsRequiredServer } from "@/lib/auth";

export default async function group() {
  await loginIsRequiredServer();

  return (
    <div>
      <MenuButton hidden="/" buttonName="Home" />
      <SearchBar />
    </div>
  );
}
