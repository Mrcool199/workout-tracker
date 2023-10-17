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

type WorkoutDialogProps = {
  label: string;
  value: string;
  index: number;
  editWorkout: (
    index: number,
    editedLabel: string,
    editedValue: string
  ) => void;
  deleteWorkout: (index: number) => void;
};

export function WorkoutDialog({
  label,
  value,
  index,
  editWorkout,
  deleteWorkout,
}: WorkoutDialogProps) {
  const [localLabel, setLocalLabel] = useState(label);
  const [localValue, setLocalValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  // Update localLabel and localValue when props change
  useEffect(() => {
    setLocalLabel(label);
    setLocalValue(value);
  }, [label, value]);

  const handleSaveChanges = () => {
    editWorkout(index, localLabel, localValue);
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteWorkout(index);
    setIsOpen(false);
  };

  return (
    <>
      <PopUp label={localLabel} value={localValue} index={index} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="w-full justify-between border-b-2"
          >
            <span>{localLabel}</span>
            <Edit3Icon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Exercise </DialogTitle>
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
              value={localLabel}
              onChange={(e) => setLocalLabel(e.target.value)}
            />
            <Label htmlFor="username" className="text-left">
              Description:
            </Label>
            <Textarea
              placeholder="Enter description"
              value={localValue}
              onChange={(e) => setLocalValue(e.target.value)}
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
