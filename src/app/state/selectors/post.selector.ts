import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostsState } from 'src/app/model/post.state';

export const selectorPostFeature = (state: AppState) => state.posts;

export const selectorPostsList = createSelector(
  selectorPostFeature,(state:PostsState) => state.posts
)
