import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from './services/post/post.service';
import { retrievedPostsList } from './state/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'postProject';

  constructor(private store: Store<any>, private postSrv: PostService) {}

  ngOnInit(): void {
    this.postSrv.getInitialListPosts().subscribe((resp) => {
      this.store.dispatch(retrievedPostsList({ posts: resp }));
    });
  }
}
