import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map, mergeMap } from 'rxjs';
import { PostService } from 'src/app/services/post/post.service';

@Injectable()
export class PostEffects{

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[App] Load Posts'),
    exhaustMap(() => this.postSrv.getListPosts()
      .pipe(
        map(posts => ({ type: '[App] Loaded Posts', posts: posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private postSrv: PostService) {



  }

}
