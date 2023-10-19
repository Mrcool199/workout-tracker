import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutsSection } from "./WorkoutsSection";

export function MenubarDemo() {
  return (
    <Tabs defaultValue="chest">
      <TabsList className="  flex flex-row justify-between shadow mb-4">
        <TabsTrigger value="chest">Chest</TabsTrigger>
        <TabsTrigger value="legs">Legs</TabsTrigger>
        <TabsTrigger value="arms">Arms</TabsTrigger>
        <TabsTrigger value="back">Back</TabsTrigger>
      </TabsList>

      <TabsContent value="chest">
        <WorkoutsSection heading="Chest" />
      </TabsContent>
      <TabsContent value="legs">
        <WorkoutsSection heading="Legs" />
      </TabsContent>
      <TabsContent value="arms">
        <WorkoutsSection heading="Arms" />
      </TabsContent>
      <TabsContent value="back">
        <WorkoutsSection heading="Back" />
      </TabsContent>
    </Tabs>
  );
}
