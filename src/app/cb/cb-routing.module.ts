import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbPage } from './cb.page';

const routes: Routes = [
  {
    path: '',
    component: CbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbPageRoutingModule {}
