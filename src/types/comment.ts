import { UserType } from "./user";

export type CommentType = {
  id: number;
  text: string;
  user: UserType;
};
