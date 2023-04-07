import { createAction, props } from "@ngrx/store";
import { PostsList } from "src/app/model/post.interface";

export const newPost = createAction(
  '[NewPost] New Post',
  props<{post: PostsList}>()
);

export const retrievedPostsList = createAction(
  '[NewPost] Retrieve Post success',
  props<{posts: ReadonlyArray<PostsList>}>()
)
