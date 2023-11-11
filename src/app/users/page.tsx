import { MenuButton } from "@/components/MenuButton";
import { SearchBar } from "@/components/SearchBar";
import { loginIsRequiredServer } from "@/lib/auth";
import { getUsers } from "@/lib/api/workout/queries";

export default async function group() {
  await loginIsRequiredServer();

  const users = await getUsers();

  return (
    <div>
      <MenuButton user="" hidden="/" buttonName="Home" />
      <SearchBar usersGot={users} />
    </div>
  );
}
