import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FadaPage } from './fada.page';

const routes: Routes = [
  {
    path: '',
    component: FadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FadaPageRoutingModule {}
