import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './book';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getBooks(): Promise<Book[]> {
    return this.http.get('api/books')
      .toPromise()
      .then(response => response.json().data);
  }

  getBook(id: number): Promise<Book> {
    return this.http.get('api/books/' + id)
      .toPromise()
      .then(response => response.json().data);
  }

  updateBook(book: Book) {
    return this.http
      .put('api/books/' + book.id, JSON.stringify(book))
      .toPromise()
      .then(() => book);
  }

}
