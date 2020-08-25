import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrilhadasestrelasPage } from './trilhadasestrelas.page';

const routes: Routes = [
  {
    path: '',
    component: TrilhadasestrelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrilhadasestrelasPageRoutingModule {}
