import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostToAddORUpdate, Post } from '../models/post';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = environment.apiUrl + 'blog';

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + '/' + id);
  }

  addPost(post: IPostToAddORUpdate) {
    return this.http.post(this.baseUrl, post).subscribe({
      next: (response: Post) => {
        console.log(response);
        this.router.navigateByUrl('/post/' + response.postId);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
