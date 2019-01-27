import { Component, OnInit } from '@angular/core';
import { UserList } from './userlist';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  myUserList: User[];
  salud: string;
  ngOnInit() {
    this.myUserListFunction();
    this.salud = this.testFunction();
  }

  myUserListFunction() {
    this.myUserList = UserList;
  }

  testFunction() {
    return 'hello there!';
  }

}
