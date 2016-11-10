import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { biz2Component } from './component/index';
import { Sub1 } from './component/sub1';
import { Sub2 } from './component/sub2';

@NgModule({
    declarations: [Sub1, Sub2],
    imports: [RouterModule.forChild([
        {
            path: 'biz2', component: biz2Component, children: [
                { path: 'sub1', component: Sub1 },
                { path: 'sub2', component: Sub2 }
            ]
        }
    ])],
    exports: [ RouterModule ]
})
export class AppRouterModule { }
