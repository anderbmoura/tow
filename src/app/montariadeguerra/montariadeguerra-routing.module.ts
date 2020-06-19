import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontariadeguerraPage } from './montariadeguerra.page';

const routes: Routes = [
  {
    path: '',
    component: MontariadeguerraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontariadeguerraPageRoutingModule {}
