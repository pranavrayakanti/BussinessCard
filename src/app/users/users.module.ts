import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { User_ROUTES } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    User_ROUTES,
    ReactiveFormsModule,
    FormsModule,
    


  ],
  declarations: [ListComponent, FormComponent],
  providers:[userService]


})
export class UsersModule { }
