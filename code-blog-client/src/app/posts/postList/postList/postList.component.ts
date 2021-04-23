import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss'],
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
        console.log(data.posts);
        this.posts = data.posts.sort((a, b) => (a.publishedDate > b.publishedDate) ? -1 : 1 );
        console.log(this.posts);
      },
    });
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (p) => {
        this.posts = p.sort((a, b) => (a.postId > b.postId) ? -1 : 1 );
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
