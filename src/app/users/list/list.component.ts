import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { userService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {



user:User;

users=this.userservice.getUsers();

constructor(private userservice:userService){





}






  

}
