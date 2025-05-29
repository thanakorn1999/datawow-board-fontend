import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { selectUser } from "@/redux/slices/userSlice";
import { useSelector } from "react-redux";
import { UserType } from "@/types/user";
//
import { useNavigate } from "react-router-dom";

const MyAvatar = (user: UserType) => {
  const logout = () => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.img}></AvatarImage>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
const BtnGotoLogin = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/signin")}>Login</Button>;
};
export default function AppNavbar() {
  const user = useSelector((state) => selectUser(state));
  return (
    <div className="bg-green-500 text-white  py-2 px-5 flex justify-between mb-6">
      <div>a Board</div>
      <div>{user.id ? <MyAvatar {...user} /> : <BtnGotoLogin />}</div>
    </div>
  );
}
