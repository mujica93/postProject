import { createReducer, on } from "@ngrx/store";
import { PostsList } from "src/app/model/post.interface";
import { loadPost, loadedPost } from "../actions/table.actions";
import { PostsState } from "src/app/model/post.state";
import { newPost, retrievedPostsList } from "../actions/post.actions";

export const initialState: ReadonlyArray<PostsList> = [];

export const postReducer = createReducer(
  initialState,
  on(loadPost, (state) => {
    return {...state,loading:true}
  }),
  on(loadedPost, (state, { posts })=> {
    return { ...state, loading: false, posts}
  }),
  on(newPost, (oldState, {post} )=> {
    return [...oldState, ...[post]]
  }),
  on(retrievedPostsList, (oldState,{posts})=>{
    return [...oldState, ...posts]
  }

  )
)
