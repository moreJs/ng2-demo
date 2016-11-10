import { Injectable } from '@angular/core';



@Injectable()
export class UserService {
  userName: string;
  constructor(){
      this.userName = 'Sherlock Holmes'; 
  }
}
