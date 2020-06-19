import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorredornebulosoPage } from './corredornebuloso.page';

const routes: Routes = [
  {
    path: '',
    component: CorredornebulosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorredornebulosoPageRoutingModule {}
