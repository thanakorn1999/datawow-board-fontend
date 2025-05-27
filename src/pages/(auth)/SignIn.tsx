import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/board");
  };
  return (
    <div className="flex">
      <div>
        <h1>Sign in</h1>
        <Form>
          <Input />
          <Button onClick={signIn}>Sign In</Button>
        </Form>
      </div>
      <div>
        <img src="https://picsum.photos/id/1/200/300"></img>
        <h1>a Board</h1>
      </div>
    </div>
  );
}
