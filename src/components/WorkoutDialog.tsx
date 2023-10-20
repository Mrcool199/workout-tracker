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
import { useState, useEffect } from "react";
import { PopUp } from "./Popup";
import { Workout } from "@/lib/db/schema/workout";

type WorkoutDialogProps = {
  workout: Workout;
  editWorkout: (workoutLabels: Workout) => void;
  deleteWorkout: (index: number) => void;
};

export function WorkoutDialog({
  workout,
  editWorkout,
  deleteWorkout,
}: WorkoutDialogProps) {
  const [workoutLabels, setLocalLabel] = useState(workout);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLocalLabel(workout);
  }, [workout]);

  const handleSaveChanges = () => {
    editWorkout(workoutLabels);
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteWorkout(workout.id);
    setIsOpen(false);
  };

  return (
    <>
      <PopUp workout={workout} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="justify-between border-b-2 mx-2"
          >
            <span>{workout.lastWorkout}</span>
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
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Exercise:
            </Label>
            <Input
              placeholder="New Workout"
              className="col-span-3 "
              value={workout.lastWorkout}
              onChange={(e) =>
                setLocalLabel({ ...workoutLabels, lastWorkout: e.target.value })
              }
            />
            <Label htmlFor="username" className="text-left">
              Description:
            </Label>
            <Textarea
              placeholder="Enter description"
              value={workout.lastDescription}
              onChange={(e) =>
                setLocalLabel({
                  ...workoutLabels,
                  lastDescription: e.target.value,
                })
              }
            />
          </div>
          <DialogFooter className="flex flex-col gap-2">
            <Button
              onClick={handleSaveChanges}
              type="submit"
              className="w-full"
            >
              Save changes
            </Button>
            <Button
              onClick={handleDelete}
              variant="destructive"
              className="w-full"
            >
              Delete Exercise
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
