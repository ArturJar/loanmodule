import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  login: string;
  name: string;

  @Output() addUserHandler = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  add() {
    this.userService.create(this.login, this.name)
      .then(user => this.addUserHandler.emit(user));
    this.clearUserData();
  }

  clearUserData() {
    this.login = undefined;
    this.name = undefined;
  }
}
