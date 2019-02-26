import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  newPost:Post = new Post ;
  
  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  createPost(){
    this.postService.postCreate(this.newPost);
  }

}
