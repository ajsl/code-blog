import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postDetail',
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.sass'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: any) => {
        this.post = data.post;
      },
    });
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
}
