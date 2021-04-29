import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/post';

@Component({
  selector: 'app-post-list-pagination',
  templateUrl: './post-list-pagination.component.html',
  styleUrls: ['./post-list-pagination.component.scss']
})
export class PostListPaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Output() updatePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  pageChange(newPage: number) {
    this.updatePage.emit(newPage);
  }
}
