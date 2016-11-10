import { Component } from '@angular/core';
import { GotoService } from '../service/index';
import { Router } from '@angular/router';


@Component({
  selector: 'investment-app',
  templateUrl: '/src/biz2/template/index.html',
  providers: [ GotoService]
})
export class biz2Component { 
    name:string = '123';
    sub = 'form-sub-component';

    constructor(private goto: GotoService){}
    
    go(){
      this.goto.goto('sub1');  
    }
}