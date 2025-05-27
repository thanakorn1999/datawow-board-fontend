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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function DialogPostCreateEdit({
  status,
  setStatus,
}: {
  status: boolean;
  setStatus: (value: boolean) => void;
}) {
  const isCreate: boolean = true;
  return (
    <Dialog open={status} onOpenChange={setStatus}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isCreate ? "Create Post" : "Edit Post"}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input />
        <Input />
        {/* <DialogFooter> */}
        <div>
          <Button type="submit" onClick={() => setStatus(false)}>
            Cancel
          </Button>
        </div>
        <div>
          <Button type="submit">Confirm</Button>
        </div>
        {/* </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
