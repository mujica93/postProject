import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPost } from 'src/app/state/selectors/post.selector';
import { AppState } from 'src/app/state/app.state';
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
    this.postSrv.deletePost(index);
  }

  searchPost() {
    this.postSrv.searchPost(this.filterTxt)
  }
}
