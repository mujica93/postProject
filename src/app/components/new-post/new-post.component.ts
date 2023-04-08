import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsList } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{

  newPostForm: PostsList = {
    name: "",
    description: ""
  }

  constructor(private store: Store, private postSrv: PostService) {

  }

  ngOnInit(): void {

  }

  public addPost(){
    this.postSrv.addPost(this.newPostForm).status == true ?
    this.newPostForm = {
      name: "",
      description: ""
      } : "" ;
  }

}
