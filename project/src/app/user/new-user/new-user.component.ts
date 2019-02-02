import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MetaService} from '../meta.service';
import { User } from '../user';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUser:User = new User;
  constructor(private userService:MetaService) { }

  ngOnInit() {
  }

 /* userInsert(form:NgForm){
    this.newUser.name = form.value.name;
    this.newUser.surname = form.form.value.surname;
    this.newUser.sex = form.form.value.sex;
    this.newUser.age = form.form.value.age;
    this.userService.create(this.newUser);
    this.newUser = new User;
    console.log(form);
  }*/

  userInsert(){
    this.userService.create(this.newUser);
    this.newUser=new User;
  }

}
