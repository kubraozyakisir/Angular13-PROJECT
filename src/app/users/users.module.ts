import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersModalComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
