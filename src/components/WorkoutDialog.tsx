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
import { useState } from "react";

type WorkoutDialogProps = {
  label: string;
  value: string;
  index: number;
  editWorkout: (editedLabel: string, editedValue: string) => void;
};

export function WorkoutDialog({
  label,
  value,
  index,
  editWorkout,
}: WorkoutDialogProps) {
  const [localLabel, setLocalLabel] = useState(label);
  const [localValue, setLocalValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveChanges = () => {
    editWorkout(localLabel, localValue);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              placeholder="New Workout"
              id="name"
              className="col-span-3"
              value={localLabel}
              onChange={(e) => setLocalLabel(e.target.value)}
            />
          </div>
          <Label htmlFor="username" className="text-left">
            Description:
          </Label>
          <Textarea
            placeholder="Enter description"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSaveChanges} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
