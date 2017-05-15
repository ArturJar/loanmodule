import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUserHandler = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  delete(userId: number): void {
    this.userService.delete(userId)
      .then(users => {
        this.deleteUserHandler.emit();
      });
  }
}
