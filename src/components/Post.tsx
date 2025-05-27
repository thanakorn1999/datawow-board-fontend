import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
export default function Post({ id }) {
  const name = "name";
  const title = "title";
  const description = "description";
  const communityTag = "CommunityTag";
  const isMyPost = true;
  return (
    <>
      <CardHeader>
        <div className="flex">
          <Avatar />
          <div className="flex-1">
            <span>{name}</span>
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
        <CardDescription>{description}</CardDescription>
        <div>
          ICON
          <p>4 Comments</p>
        </div>
      </CardContent>
    </>
  );
}
