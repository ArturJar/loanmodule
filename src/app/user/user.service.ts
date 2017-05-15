import { Injectable } from '@angular/core';
import * as Enumerable from 'linq';

import { User } from './user';
import { USERS } from './user.mock';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
  }

  create(login: string, name: string) {
    let enumerableUsers = Enumerable.from(USERS);
    let id = enumerableUsers.any() ? Enumerable.from(USERS).max(item => item.id) + 1 : 0;
    USERS.push({ id, login, name });
    return Promise.resolve(Enumerable.from(USERS).last());
  }

  delete(userId: number): Promise<User[]> {
    let userToDelete = Enumerable.from(USERS).where(user => user.id === userId).firstOrDefault();
    USERS.splice(USERS.indexOf(userToDelete), 1);
    return Promise.resolve(USERS);
  }
}
