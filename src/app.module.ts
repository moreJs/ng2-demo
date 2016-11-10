import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';

//biz module (目前是因为有子路由的问题)
import { Biz2 } from './biz2/module/index';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, Biz2, RouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}

