import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

export default function DialogPostCreateEdit() {
  return (
    <div>
      <Form>
        <div className="flex">
          <Input />
          <div>Select</div>
          <Button>Create +</Button>
        </div>
      </Form>
    </div>
  );
}
