import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.bookService.getBook(+params['id']).then(book => this.book = book));
  }

  update(): void {
    this.bookService.updateBook(this.book);
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
