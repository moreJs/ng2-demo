import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../component/index';
import { SubComponent } from '../component/sub';


import { UserService } from '../service/userService';
import { ConcatModule } from './concat';

@NgModule({
  imports:      [ BrowserModule, ConcatModule],
  declarations: [ AppComponent, SubComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService]
})
export class AppModule { }