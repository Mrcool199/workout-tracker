"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { WorkoutDialog } from "./WorkoutDialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "@/lib/api/workout/mutations";
import { useRouter } from "next/navigation";
import { Workout } from "@/lib/db/schema/workout";
import { useState } from "react";

const initialWorkout = {
  description: "",
  workout: "",
  id: -1,
} as const;

export function WorkoutsSection({
  workouts,
  heading,
}: {
  workouts: Workout[];
  heading: string;
}) {
  const { refresh: refreshPage } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogWorkout, setDialogWorkout] = useState<{
    id: Workout["id"];
    workout: string;
    description: string;
  }>(initialWorkout);

  const [errorMessage, setErrorMessage] = useState("");

  async function handleDelete(id: Workout["id"]) {
    const result = await deleteWorkout(id);
    if (result.error) {
      alert(`an error occured: ${result.error}`);
      return;
    }

    refreshPage();
    handleClose();
  }

  function handleAddWorkout() {
    setDialogWorkout(initialWorkout);
    setIsOpen(true);
  }

  function handleUpdateWorkout(workout: Workout) {
    setDialogWorkout({
      workout: workout.lastWorkout,
      description: workout.lastDescription,
      id: workout.id,
    });
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    setErrorMessage("");
  }

  async function handleSaveChanges() {
    if (
      dialogWorkout.workout.length === 0 ||
      dialogWorkout.description.length === 0
    ) {
      setErrorMessage("Please enter exercise or description");
      return;
    }

    if (dialogWorkout.id === initialWorkout.id) {
      const { error } = await createWorkout({
        firstWorkout: dialogWorkout.workout,
        firstDescription: dialogWorkout.description,
        muscleGroup: heading,
      });

      if (error) {
        alert(`an error occured: ${error}`);
        return;
      }

      refreshPage();
    } else {
      const { error } = await updateWorkout(dialogWorkout.id, {
        lastDescription: dialogWorkout.description,
        lastWorkout: dialogWorkout.workout,
      });

      if (error) {
        alert(`an error occured: ${error}`);
        return;
      }

      refreshPage();
    }
    handleClose();
  }

  return (
    <div className="flex flex-col justify-between gap-2">
      <Dialog
        open={isOpen}
        onOpenChange={(value) => (value ? setIsOpen(value) : handleClose())}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {dialogWorkout.id === initialWorkout.id
                ? "Add Exercise"
                : "Edit Workout"}
            </DialogTitle>

            <DialogDescription>
              Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Exercise:
            </Label>
            <Input
              required
              placeholder="New Exercise"
              className="col-span-3 "
              value={dialogWorkout.workout}
              onChange={(e) =>
                setDialogWorkout({ ...dialogWorkout, workout: e.target.value })
              }
            />
            <Label htmlFor="username" className="text-left">
              Description:
            </Label>
            <Textarea
              required
              placeholder="Add description ..."
              value={dialogWorkout.description}
              onChange={(e) =>
                setDialogWorkout({
                  ...dialogWorkout,
                  description: e.target.value,
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

            {dialogWorkout.id !== initialWorkout.id ? (
              <Button
                onClick={() => handleDelete(dialogWorkout.id)}
                variant="destructive"
                className="w-full"
              >
                Delete Workout
              </Button>
            ) : null}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-row justify-between items-center mx-4">
        <b className="text-lg shadow-sm">{heading}</b>

        <Button onClick={handleAddWorkout} variant="ghost" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col gap-1">
        {workouts.map((workout) => (
          <WorkoutDialog
            key={workout.id}
            workout={workout}
            editWorkout={() => handleUpdateWorkout(workout)}
          />
        ))}
      </div>
    </div>
  );
}
