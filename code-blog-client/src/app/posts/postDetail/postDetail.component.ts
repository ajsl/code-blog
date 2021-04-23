import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postDetail',
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.sass'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  isAdmin = false;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: any) => {
        this.post = data.post;
      },
    });
    this.checkToken();
  }

  loadPost(id: number): void {
    console.log(id);
    this.postService.getPost(id).subscribe({
      next: (p: Post) => {
        this.post = p;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  checkToken(): any {
    if (localStorage.getItem('token') !== null){
      return this.authService.checkUserIsAuthorised().subscribe({
        next: (x) => {
          console.log(x);
          this.isAdmin = x;
        }
      });
    }
  }
}
