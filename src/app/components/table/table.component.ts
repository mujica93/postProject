import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorPostsList } from 'src/app/state/selectors/post.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  posts$: Observable<any> = new Observable();

  constructor(private store:Store<AppState> ) {



  }

  ngOnInit(): void {
    this.posts$ = this.store.select(selectorPostsList)
  }

  public deletePost(id:number){
    this.posts$.forEach(e =>{
        if (id === e.id) {

        }

        }
      )
  }

}
