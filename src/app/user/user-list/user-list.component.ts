import { Component, OnInit } from '@angular/core';
import * as Enumerable from 'linq';

import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser: User;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersSlowly().then(users => this.users = users);
  }

  selectUser(user: User) {
    if (this.selectedUser && user.id === this.selectedUser.id) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
  handleDeleteUser() {
    this.selectedUser = undefined;
  }

}
