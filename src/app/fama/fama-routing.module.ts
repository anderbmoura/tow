import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamaPage } from './fama.page';

const routes: Routes = [
  {
    path: '',
    component: FamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamaPageRoutingModule {}
