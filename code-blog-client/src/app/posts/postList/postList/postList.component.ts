import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: any) => {
        this.posts = data.posts;
      },
    });
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(
      (p) => {
        this.posts = p;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
