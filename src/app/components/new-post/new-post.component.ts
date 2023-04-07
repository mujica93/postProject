import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsList } from 'src/app/model/post.interface';
import { newPost } from 'src/app/state/actions/post.actions';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{
  constructor(private store: Store) {

  }

  ngOnInit(): void {

  }

  public addPost(){
    const addPost: PostsList = {
      id: 4,
      name: "COMO ESTAS?",
      description: "Saludos cordiales"
    }

    this.store.dispatch(newPost({post:addPost}))

  }

}
