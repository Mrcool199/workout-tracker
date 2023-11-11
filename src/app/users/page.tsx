import { MenuButton } from "@/components/MenuButton";
import { SearchBar } from "@/components/SearchBar";
import { loginIsRequiredServer } from "@/lib/auth";
import { getUsers } from "@/lib/api/workout/queries";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default async function group() {
  await loginIsRequiredServer();

  const users = await getUsers();

  const session = await getServerSession(authConfig);

  const loggedInUser = session?.user.email;

  return (
    <div>
      <MenuButton user="" hidden="/" buttonName="Home" />
      <SearchBar loggedInUser={loggedInUser} usersGot={users} />
    </div>
  );
}
