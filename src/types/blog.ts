import { UserType } from "./user";
import { CommentType } from "./comment";

export type BlogType = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  user: UserType;
  comments: CommentType[];
};
