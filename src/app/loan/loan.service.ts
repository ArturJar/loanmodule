import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import * as Enumerable from 'linq';
import 'rxjs/add/operator/toPromise';

import { Loan } from './loan';


@Injectable()
export class LoanService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  getLoans(): Promise<Loan[]> {
    return this.http.get('api/loans')
      .toPromise()
      .then(response => response.json().data);
  }

  create(userId: number, bookId: number): Promise<Loan> {
    //  let enumerableUsers = Enumerable.from(USERS);
    //   let id = enumerableUsers.any() ? Enumerable.from(USERS).max(item => item.id) + 1 : 0;
    //   USERS.push({ id, login, name });
    //   return Promise.resolve(Enumerable.from(USERS).last());

    return this.http
      .post('api/loans', JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Loan)

  }



}
