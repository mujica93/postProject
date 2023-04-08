import { PostsState } from '../models/post.state';
import { ActionReducerMap } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';
import { PostsList } from '../models/post.interface';

export interface AppState {
  posts: ReadonlyArray<PostsList>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  posts: postReducer,
};
