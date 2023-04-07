import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPost, loadedPost } from './state/actions/table.actions';
import { PostService } from './services/post/post.service';
import { PostsList } from 'src/app/model/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'postProject';

  constructor(private store: Store<any>, private postSrv: PostService) {

  }

  ngOnInit(): void {

    this.store.dispatch(loadPost());
    this.postSrv.getListPosts().subscribe((resp:PostsList[])=>{
      this.store.dispatch(loadedPost(
        {posts:resp}
      ))
    })
  }
}
