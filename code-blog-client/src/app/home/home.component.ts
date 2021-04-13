import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // posts: Post[];

  // constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {}
  //   this.route.data.subscribe(data => {
  //     this.posts = data['posts'].result;
  //   });
  //   console.log(this.posts);
  //   // this.loadPosts();
  // }

  // loadPosts() {
  //   this.postService.getPosts().subscribe(
  //     (p) => {
  //       this.posts = p;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
