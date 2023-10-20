import { Button } from "./ui/button";
import { Edit3Icon } from "lucide-react";

import { PopUp } from "./Popup";
import { Workout } from "@/lib/db/schema/workout";

type WorkoutDialogProps = {
  workout: Workout;
  editWorkout: () => void;
};

export function WorkoutDialog({ workout, editWorkout }: WorkoutDialogProps) {
  return (
    <>
      <PopUp workout={workout} />
      <Button
        onClick={editWorkout}
        variant="secondary"
        className="justify-between border-b-2 mx-2"
      >
        <span>{workout.lastWorkout}</span>
        <Edit3Icon />
      </Button>
    </>
  );
}
