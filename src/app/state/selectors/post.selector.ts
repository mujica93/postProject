import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsList } from 'src/app/models/post.interface';

export const selectPost =
  createFeatureSelector<ReadonlyArray<PostsList>>('posts');

export const filterPost = createSelector(
  selectPost,
  (state: ReadonlyArray<PostsList>) => state
);
