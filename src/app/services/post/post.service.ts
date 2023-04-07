import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostsList } from 'src/app/model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }


  public getListPosts(): Observable<any> {

    const array = [
      {
        id: "Pudgy Penguin #1",
        name: 0.2,
        description: "https://api.pudgypenguins.io/penguin/image/1"
      },
      {
        id: "Pudgy Penguin #1",
        name: 0.2,
        description: "https://api.pudgypenguins.io/penguin/image/1"
      },
      {
        id: "Pudgy Penguin #1",
        name: 0.2,
        description: "https://api.pudgypenguins.io/penguin/image/1"
      },
    ]

    return of(array).pipe(
      delay(1500)
    )


  }

  public newPost(){

  }

  public deletePost(){

  }

  public searchPost(){

  }

}
