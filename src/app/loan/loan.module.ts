import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoanListComponent } from './loan-list/loan-list.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanService } from './loan.service';

export * from './loan-list/loan-list.component';
export * from './add-loan/add-loan.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [LoanListComponent, AddLoanComponent],
  exports: [
    LoanListComponent,

  ],
  providers: [
    LoanService
  ]
})
export class LoanModule { }
