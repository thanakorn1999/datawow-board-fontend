import Post from "@/components/Post";
import Comment from "@/components/Comment";
import { Button } from "@/components/ui/button";
const BtnAddComment = () => {
  return <Button>Add Comment</Button>;
};
export default function BoardId() {
  const comments = [
    {},
    {},
    {},
    {},

    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div>
      <div>Btn Back</div>
      <Post />
      <BtnAddComment />
      {comments.map((cm) => (
        <Comment />
      ))}
    </div>
  );
}
