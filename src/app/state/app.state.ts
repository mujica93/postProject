import { PostsState } from "../model/post.state";
import { ActionReducerMap } from "@ngrx/store";
import { postReducer } from "./reducers/post.reducer";


export interface AppState{
  posts: PostsState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  posts: postReducer
}
