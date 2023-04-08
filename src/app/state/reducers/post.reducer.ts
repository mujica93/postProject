import { createReducer, on } from '@ngrx/store';
import { PostsList } from 'src/app/models/post.interface';
import {
  newPost,
  retrievedPostsList,
  deletePost,
  searchPost,
} from '../actions/post.actions';

export const initialState: ReadonlyArray<PostsList> = [];

export const postReducer = createReducer(
  initialState,
  on(newPost, (oldState, { post }) => {
    return [...oldState, ...[post]];
  }),
  on(deletePost, (oldState, { index }) => {
    return oldState.filter((post, i) => i !== index);
  }),
  on(searchPost, (oldState, { search }) => {
    let posts = localStorage.getItem('posts');
    if (posts) {
      let postsParsed = JSON.parse(posts);
      return [
        ...postsParsed.filter(
          (post: any) =>
            post.name.includes(search) || post.description.includes(search)
        ),
      ];
    } else {
      return [];
    }
  }),
  on(retrievedPostsList, (oldState, { posts }) => {
    return [...posts];
  })
);
