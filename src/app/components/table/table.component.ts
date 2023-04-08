import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPost } from 'src/app/state/selectors/post.selector';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from 'src/app/state/actions/post.actions';
import { retrievedPostsList } from '../../state/actions/post.actions';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  posts$: Observable<any> = new Observable();

  filterTxt: string = '';

  constructor(private store: Store<AppState>, private postSrv: PostService) {
    this.posts$ = this.store.select(selectPost);
  }

  ngOnInit(): void {}

  postDelete(index: number) {
    this.store.dispatch(deletePost({ index }));
  }

  async searchPost() {
    console.log(await this.postSrv.searchPost(this.filterTxt));
  }
}
