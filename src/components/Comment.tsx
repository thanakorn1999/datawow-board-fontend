import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { CommentType } from "@/types/comment";

export default function Comment({}: CommentType) {
  const name = "name";
  const timestamp = 0;
  const img = "https://picsum.photos/id/1/200/300";
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <>
      <CardHeader>
        <div className="flex">
          <Avatar>
            <AvatarImage src={img}></AvatarImage>
          </Avatar>
          <span>{name}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{text}</CardDescription>
      </CardContent>
    </>
  );
}
