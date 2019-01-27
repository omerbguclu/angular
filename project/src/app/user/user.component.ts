import { Component, OnInit } from '@angular/core';
import { UserList } from './userlist';
import { User } from './user';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:MetaService) { }
  myUserList:User[];
  salud: string;
  person:User = new User;
  ngOnInit() {
    this.myUserListFunction();

  }

  myUserListFunction() {
    //this.myUserList = UserList;
    this.salud = this.testFunction();
    this.myUserList = this.userService.getList();
  }

  testFunction() {
    return 'hello there!';
  }

  addUser(){
    //this.person.userId=10;
    this.person.name='Gokhan';
    this.person.surname='Bguclu';
    //this.person.sex='Male';
    //this.person.age=45;
    this.userService.create(this.person);
  }

}
