import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<Post[]> {
  pageNumber = 1;
  pageSize = 6;
  constructor(private postService: PostService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    return this.postService.getPosts(this.pageNumber, this.pageSize).pipe(
      catchError((error) => {
        console.log(error);
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
