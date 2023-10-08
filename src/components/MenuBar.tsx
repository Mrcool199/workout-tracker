"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MenubarDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="flex flex-row justify-between">
        <TabsTrigger value="yesterday">yesterday</TabsTrigger>
        <TabsTrigger value="today">today</TabsTrigger>
        <TabsTrigger value="tomorrow">tomorrow</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
