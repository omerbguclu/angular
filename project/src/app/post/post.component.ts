import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList:Post[];

  constructor(private postService:PostService) { }

  ngOnInit() {
   this.getList();
  }

  getList(){
    this.postService.postRead().subscribe(data=>this.postList=data);
  }

}
