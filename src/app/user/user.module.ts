import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';

export * from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserListComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  providers: [UserService],
  exports: [
    UserListComponent
  ]

})
export class UserModule { }
