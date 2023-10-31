import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SwordsIcon } from "lucide-react";
import { getUsers } from "@/lib/api/workout/queries";
import { ProfileDialog } from "./ProfileDialog";

export async function SearchBar() {
  let users = null;
  try {
    users = await getUsers();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return "Error occurred";
  } finally {
    return (
      <>
        <div className="px-4 flex flex-row items-baseline">
          <div className="flex flex-row items-baseline p-2">
            <b className="text-lg shadow-sm">Friends:</b>
          </div>
          <div className="pl-6 pt-2">
            <Input type="email" placeholder="Search Email" />
          </div>
        </div>
        <div className="flex flex-col p-4">
          {Array.isArray(users) ? (
            users.map((user: any) => (
              <ProfileDialog key={user.id} users={user} />
            ))
          ) : (
            <Button
              variant="secondary"
              className="justify-between border-b-2 my-2"
            >
              <span>No users found</span>
              <SwordsIcon />
            </Button>
          )}
        </div>
      </>
    );
  }
}
