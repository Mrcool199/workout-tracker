import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";

export function MenubarDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="flex flex-row justify-between">
        <TabsTrigger value="yesterday">yesterday</TabsTrigger>
        <TabsTrigger value="today">today</TabsTrigger>
        <TabsTrigger value="tomorrow">tomorrow</TabsTrigger>
      </TabsList>

      <TabsContent value="yesterday">
        <WorkoutsSection heading="Sunday" />
      </TabsContent>
      <TabsContent value="today">
        <WorkoutsSection heading="Monday" />
      </TabsContent>
      <TabsContent value="tomorrow">
        <WorkoutsSection heading="Tuesday" />
      </TabsContent>
    </Tabs>
  );
}
