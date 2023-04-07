import { createAction, props } from "@ngrx/store";

export const newPost = createAction(
  '[NewPost] New Post',
  props<{name: string, description: string}>()
);
