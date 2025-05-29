import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BlogType } from "@/types/blog";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

function CommunityTag({ name }: { name: string }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
const BtnDel = () => (
  <>
    <Button>del</Button>
  </>
);
const BtnEdit = () => (
  <>
    <Button>edit</Button>
  </>
);
export default function Post({
  id,
  title,
  text,
  createdAt,
  user,
  comments,
}: BlogType) {
  const communityTag = "CommunityTag";
  const isMyPost = true;

  return (
    <>
      <CardHeader>
        <div className="flex">
          <Avatar />
          <div className="flex-1">
            <span>{user?.username || "-"}</span>
            <span>{createdAt}</span>
          </div>
          {isMyPost && (
            <div className="flex gap-2">
              <BtnDel />
              <BtnEdit />
            </div>
          )}
          <div></div>
        </div>
        <CommunityTag name={communityTag} />
      </CardHeader>
      <CardContent>
        <CardTitle>
          {title} {id}
        </CardTitle>
        <CardDescription>{text}</CardDescription>
        <div>
          ICON
          <p>{comments?.length ?? 0} Comments</p>
        </div>
      </CardContent>
    </>
  );
}
