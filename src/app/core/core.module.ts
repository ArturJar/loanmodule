import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { APPROUTES } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APPROUTES),
  ],
  declarations: [
    PageNotFoundComponent,
    NavBarComponent
  ],
  exports: [
    NavBarComponent,
    RouterModule
  ]
})

export class CoreModule { }
