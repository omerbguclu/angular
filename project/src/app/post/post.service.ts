import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Post[];

  constructor(private http:HttpClient) { }

  postCreate(post:Post) {
    this.postList.push(post);
    this.http.post("https://jsonplaceholder.typicode.com/posts",post);
  }

  postRead(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  postUpdate() {

  }

  postDelete() {

  }
}
