import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {
  newPostForm: FormGroup;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.createNewPostForm();
  }

  createNewPostForm(): void {
    this.newPostForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      tags: new FormControl(),
      photoUrl: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.newPostForm.value);
    this.postService.addPost(this.newPostForm.value);
  }

}
