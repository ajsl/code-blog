import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postDetail',
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(+this.route.snapshot.paramMap.get('id'));
    this.loadPost(+this.route.snapshot.paramMap.get('id'));
  }

  loadPost(id: number): void {
    console.log(id);
    this.postService.getPost(id).subscribe(
      (p) => {
        this.post = p;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}