import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPostToAddORUpdate, Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './updatePost.component.html',
  styleUrls: ['./updatePost.component.scss'],
})
export class UpdatePostComponent implements OnInit {
  updatePostForm: FormGroup;
  post: IPostToAddORUpdate;

  constructor(private route: ActivatedRoute, private postservice: PostService) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: any) => {
        this.post = data.post;
      },
    });
    console.log(this.post);
    this.createUpdateFrom();
  }

  createUpdateFrom(): void {
    this.updatePostForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      tags: new FormControl(),
      photoUrl: new FormControl()
    });

    this.updatePostForm.get('title').setValue(this.post.title);
    this.updatePostForm.get('author').setValue(this.post.author);
    this.updatePostForm.get('content').setValue(this.post.content);
    this.updatePostForm.get('tags').setValue(this.post.tags);
    this.updatePostForm.get('photoUrl').setValue(this.post.photoUrl);

  }

  onSubmit() {
    console.log(this.updatePostForm.value);
    this.postservice.editPost(this.updatePostForm.value, this.post.postId);
  }

}
