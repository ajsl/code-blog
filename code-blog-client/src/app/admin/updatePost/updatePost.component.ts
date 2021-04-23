import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './updatePost.component.html',
  styleUrls: ['./updatePost.component.scss'],
})
export class UpdatePostComponent implements OnInit {
  updatePostForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
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
  }

  onSubmit() {
    console.log(this.updatePostForm.value);
  }
}
