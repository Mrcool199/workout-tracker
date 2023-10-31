import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SwordsIcon } from "lucide-react";

export function ProfileDialog({ users }: { users: any | null }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="justify-between border-b-2 my-2">
          <div className="icon shadow w-8 h-8 p-0">
            <img src={users?.image ?? ""} alt="" />
          </div>
          <span>{users?.name}</span>
          <SwordsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-3/4">
        <DialogHeader>
          <DialogTitle>{users?.name}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
