import { Injectable } from '@angular/core';
import { UserList } from './userlist';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor() { }

  getList(){
    return UserList;
  }

  create(newPerson:User){
    UserList.push(newPerson);
    return UserList;
  }
  read(){}
  update(){}
  delete(){}  
}
