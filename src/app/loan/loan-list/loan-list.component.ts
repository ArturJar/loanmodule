import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans: Loan[];
  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanService.getLoans().then(loans => this.loans = loans);
  }

}
