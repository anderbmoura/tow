import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardiaoPage } from './guardiao.page';

const routes: Routes = [
  {
    path: '',
    component: GuardiaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardiaoPageRoutingModule {}
