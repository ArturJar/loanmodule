import { Routes } from '@angular/router';

import { UserListComponent } from '../user/user.module';
import { BookListComponent, BookDetailsComponent } from '../book/book.module';
import { LoanListComponent, AddLoanComponent } from '../loan/loan.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APPROUTES: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'loans', component: LoanListComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
