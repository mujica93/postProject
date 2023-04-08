import { createAction, props } from "@ngrx/store";
import { PostsList } from "src/app/models/post.interface";

export const loadPost = createAction(
  '[App] Load Posts'
)

export const loadedPost = createAction(
  '[App] Loaded Posts',
  props<{posts: PostsList[] }>()
)

export const deletePost = createAction(
  '[Table] Delete Post',
  props<{postId: string}>()
);
