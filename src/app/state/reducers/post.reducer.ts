import { createReducer, on } from "@ngrx/store";
import { PostsList } from "src/app/model/post.interface";
import { loadPost, loadedPost } from "../actions/table.actions";
import { PostsState } from "src/app/model/post.state";

export const initialState: PostsState = {loading: false, posts:[]};

export const postReducer = createReducer(
  initialState,
  on(loadPost, (state) => {
    return {...state,loading:true}
  }),
  on(loadedPost, (state, { posts })=> {
    return { ...state, loading: false, posts}
  })
)
