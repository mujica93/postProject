import { PostsList } from "./post.interface";

export interface PostsState {
  loading: boolean;
  posts: ReadonlyArray<PostsList>;
}
