"use client";
import { Button } from "./ui/button";

export function ChatRoom({
  hide,
  buttonName,
}: {
  hide: string;
  buttonName: string;
}) {
  return (
    <div className="flex flex-col gap-2 m-4">
      <a href={hide}>
        <Button className="w-full" role="link">
          {buttonName}
        </Button>
      </a>
    </div>
  );
}
