import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatedPosts, Pagination, Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[];
  pagination: Pagination;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: any) => {
        console.log(data);
        this.posts = data.posts.posts;
        this.pagination = data.posts.pagination;
        console.log(this.pagination);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  loadPosts(pageNumber: number) {
    this.postService.getPosts(pageNumber, 6).subscribe({
      next: (data: any) => {
        this.posts = data.posts.sort((a, b) =>
          a.publicationDate > b.publicationDate ? -1 : 1
        );
        this.pagination = data.pagination;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  updatePage(pageNumber) {
    this.loadPosts(pageNumber);
  }
}
