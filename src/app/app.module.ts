import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBooksService } from './book/book.mock';
import { InMemoryLoanService } from './loan/loan.mock';

import { UserModule, UserListComponent } from './user/user.module';
import { BookModule, BookListComponent, BookDetailsComponent } from './book/book.module';

import { LoanModule, AddLoanComponent, LoanListComponent } from './loan/loan.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    UserModule,
    BookModule,
    LoanModule,
    InMemoryWebApiModule.forRoot(InMemoryBooksService, { delay: 2000 }),
    InMemoryWebApiModule.forRoot(InMemoryLoanService, { delay: 2000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
