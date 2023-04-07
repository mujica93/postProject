import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { PostsState } from 'src/app/model/post.state';
import { PostsList } from 'src/app/model/post.interface';

export const selectPost =  createFeatureSelector<ReadonlyArray<PostsList>>('posts');

// export const selectorPostFeature = (state: AppState) => state.posts;

// export const selectorPostsList = createSelector(
//   selectorPostFeature,(state:PostsState) => state.posts
// )
