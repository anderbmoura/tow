import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CozinharPage } from './cozinhar.page';

const routes: Routes = [
  {
    path: '',
    component: CozinharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CozinharPageRoutingModule {}
