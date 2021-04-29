import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostToAddORUpdate, PaginatedPosts, Post } from '../models/post';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = environment.apiUrl + 'blog';

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(page?, postsPerPage?): Observable<Post[]> {
    const paginatedPosts: PaginatedPosts<Post[]> = new PaginatedPosts<Post[]>();

    let params = new HttpParams();

    if (page !== null && postsPerPage !== null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', postsPerPage);
    }

    return this.http
      .get<Post[]>(this.baseUrl, { observe: 'response', params })
      .pipe(
        map((response): any => {
          console.log(response);
          console.log(
            (paginatedPosts.pagination = JSON.parse(
              response.headers.get('Pagination')
            ))
          );
          paginatedPosts.posts = response.body;
          if (response.headers.get('Pagination') !== null) {
            paginatedPosts.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedPosts;
        })
      );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + '/' + id);
  }

  addPost(post: IPostToAddORUpdate): any {
    return this.http.post(this.baseUrl, post).subscribe({
      next: (response: Post) => {
        console.log(response);
        this.router.navigateByUrl('/post/' + response.postId);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editPost(post: IPostToAddORUpdate, postId: number): any {
    console.log(post);
    return this.http.put(this.baseUrl + '/' + postId, post).subscribe({
      next: () => {
        this.router.navigateByUrl('/post/' + postId);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deletePost(postId: number): any {
    return this.http.post(this.baseUrl + '/' + postId, {}).subscribe({
      next: () => {
        console.log(postId + ' deleted');
      },
    });
  }
}
