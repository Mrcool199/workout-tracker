import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Edit3Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type WorkoutDialogProps = {
  workoutData: { label: string };
};

export function WorkoutDialog({ workoutData: { label } }: WorkoutDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="justify-between border-b-2">
          <span>{label}</span>
          <Edit3Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Exercise</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Exercise:
            </Label>
            <Input
              id="name"
              placeholder="Enter exercise"
              className="col-span-3"
            />
          </div>
          <Label htmlFor="username" className="text-left">
            Description:
          </Label>
          <Textarea placeholder="Type your message here." />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
