import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { biz1Component }  from './biz1/component/index';
import { biz2Component }    from './biz2/component/index';

@NgModule({
  declarations: [ biz1Component, biz2Component ],
  imports: [
    RouterModule.forRoot([
      { path: 'biz1', component: biz1Component },
      { path: 'biz2', component: biz2Component },
      { path: '', redirectTo: '/biz1', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


