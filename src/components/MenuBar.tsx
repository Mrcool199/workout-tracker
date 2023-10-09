"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateDayBar } from "./DayBar";
import { CreateWorkoutsSection } from "./WorkoutsSection";

export function MenubarDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="flex flex-row justify-between">
        <TabsTrigger value="yesterday">yesterday</TabsTrigger>
        <TabsTrigger value="today">today</TabsTrigger>
        <TabsTrigger value="tomorrow">tomorrow</TabsTrigger>
      </TabsList>

      <TabsContent value="yesterday"></TabsContent>
      <TabsContent value="today">
        <CreateDayBar />
        <CreateWorkoutsSection />
      </TabsContent>
      <TabsContent value="tomorrow"></TabsContent>
    </Tabs>
  );
}
