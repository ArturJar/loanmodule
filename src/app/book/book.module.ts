import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { BookDetailsComponent } from './book-details/book-details.component';

export * from './book-list/book-list.component';
export * from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    BookListComponent,
    BookDetailsComponent
  ],
  exports: [
    BookListComponent
  ],
  providers: [
    BookService
  ]

})
export class BookModule { }
