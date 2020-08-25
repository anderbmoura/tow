import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontedagloriaPage } from './frontedagloria.page';

const routes: Routes = [
  {
    path: '',
    component: FrontedagloriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontedagloriaPageRoutingModule {}
