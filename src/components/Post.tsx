import { Avatar } from "@/components/ui/avatar";
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
export default function Post({ id }) {
  const name = "name";
  const title = "title";
  const description = "description";
  const communityTag = "CommunityTag";
  return (
    <>
      <CardHeader>
        <div className="flex">
          <Avatar />
          <div>
            <span>{name}</span>
          </div>
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
