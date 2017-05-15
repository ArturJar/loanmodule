import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loans: Observable<Loan[]>
  userId: number;
  bookId: number;

  @Output() addLoanHandler = new EventEmitter<Loan>();

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }
  add(userId: number, bookId: number): void {
    this.loanService.create(this.userId, this.bookId)
      .then(loan => {
        this.loan.push(userId);

      });
    this.clearUserData();
  }

  clearUserData() {
    this.userId = undefined;
    this.bookId = undefined;
  }
}
