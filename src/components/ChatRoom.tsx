"use client";
import Link from "next/link";
import { Button } from "./ui/button";

const openInNewTab = (url: any) => {
  window.open(url, "_blank", "noreferrer");
};

export function ChatRoom() {
  return (
    <div className="flex flex-col gap-2 m-4">
      <Button
        role="link"
        onClick={() => openInNewTab("http://localhost:3000/group")}
      >
        Group
      </Button>
    </div>
  );
}
