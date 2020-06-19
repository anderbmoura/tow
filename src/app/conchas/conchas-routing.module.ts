import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConchasPage } from './conchas.page';

const routes: Routes = [
  {
    path: '',
    component: ConchasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConchasPageRoutingModule {}
