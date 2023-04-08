import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, delay, of } from 'rxjs';
import { PostsList, SearchPost } from 'src/app/models/post.interface';
import {
  deletePost,
  newPost,
  searchPost,
} from 'src/app/state/actions/post.actions';
import { ResponseInterface } from 'src/app/models/response.interface';
import { selectPost } from 'src/app/state/selectors/post.selector';
import { retrievedPostsList } from '../../state/actions/post.actions';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private store: Store) {}

  public getInitialListPosts(): Observable<any> {
    //buscamos en localstorage si hay posts guardados
    let posts = localStorage.getItem('posts');
    if (posts) {
      //si hay posts guardados los parseamos y los devolvemos
      let postsParsed = JSON.parse(posts);
      return of(postsParsed).pipe(delay(1500));
    } else {
      //si no hay posts guardados devolvemos un array con data de prueba estatica para inicializar el store

      const array: PostsList[] = [
        // {
        //   name: 'Post 1',
        //   description: 'Description 1',
        // },
      ];

      localStorage.setItem('posts', JSON.stringify(array));

      return of(array).pipe();
    }
  }

  public addPost(newPostForm: PostsList) {
    this.store.dispatch(newPost({ post: newPostForm }));

    let res: ResponseInterface = {
      code: 200,
      status: true,
      message: 'Post added successfully',
      data: [],
    };

    //guardamos en localstorage el nuevo post
    let posts = localStorage.getItem('posts');
    if (posts) {
      let postsParsed = JSON.parse(posts);
      postsParsed.push(newPostForm);
      localStorage.setItem('posts', JSON.stringify(postsParsed));
    } else {
      let postsParsed: any = [];
      postsParsed.push(newPostForm);
      localStorage.setItem('posts', JSON.stringify(postsParsed));
    }

    return res;
  }

  public deletePost(index: number) {
    this.store.dispatch(deletePost({ index: index }));

    let res: ResponseInterface = {
      code: 200,
      status: true,
      message: 'Post deleted successfully',
      data: [],
    };

    //eliminamos del localstorage el post
    let posts = localStorage.getItem('posts');
    if (posts) {
      let postsParsed = JSON.parse(posts);
      postsParsed.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(postsParsed));
    }

    return res;
  }

  public searchPost(search: string) {
    if (search === '') {
      let posts = localStorage.getItem('posts');
      if (posts) {
        let postsParsed = JSON.parse(posts);
        this.store.dispatch(retrievedPostsList({ posts: postsParsed }));
      }
    } else {
      this.store.dispatch(searchPost({ search: search }));
    }

    let res: ResponseInterface = {
      code: 200,
      status: true,
      message: 'Post searched successfully',
      data: [],
    };

    return res;
  }
}
