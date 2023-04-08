import { createAction, props } from '@ngrx/store';
import { PostsList } from 'src/app/models/post.interface';

export const newPost = createAction(
  '[NewPost] New Post',
  props<{ post: PostsList }>()
);

export const deletePost = createAction(
  '[NewPost] Delete Post',
  props<{ index: number }>()
);

export const searchPost = createAction(
  '[NewPost] Search Post',
  props<{ search: string }>()
);

export const retrievedPostsList = createAction(
  '[NewPost] Retrieve Post success',
  props<{ posts: ReadonlyArray<PostsList> }>()
);
