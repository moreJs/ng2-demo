import { Component, Input } from '@angular/core';
import { UserService } from '../service/userService';


@Component({
    selector: 'sub-component',
    template: `<h3>{{ hero }} 
                    <p *ngIf="name">welcome, {{name}}</p>
              </h3>`
})
export class SubComponent{
    @Input()
    hero:string = '';
    name:string = '';

    constructor(test: UserService){
        this.name = test.userName;
    }
}