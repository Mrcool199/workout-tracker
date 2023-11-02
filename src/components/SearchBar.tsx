import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SwordsIcon } from "lucide-react";
import { getUsers } from "@/lib/api/workout/queries";
import Link from "next/link";

export async function SearchBar() {
  const users = await getUsers();
  return (
    <>
      <div className="px-4 flex flex-row items-baseline">
        <div className="flex flex-row items-baseline p-2">
          <b className="text-lg shadow-sm pr-6">Friends:</b>
        </div>
        <div className="w-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Input type="text" placeholder="Search" className="pl-12 pr-4" />
        </div>
      </div>
      <div className="flex flex-col p-4 ">
        {Array.isArray(users) ? (
          users.map((user: any) => (
            <Button
              asChild
              key={user.id}
              variant="secondary"
              className="justify-between border-b-2 my-2 w-full"
            >
              <Link href={`/users/${user.id}`} key={user.id}>
                <div className="icon shadow w-8 h-8 p-0">
                  <img src={user?.image ?? ""} alt="" />
                </div>
                <span>{user?.name}</span>
                <SwordsIcon />
              </Link>
            </Button>
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
