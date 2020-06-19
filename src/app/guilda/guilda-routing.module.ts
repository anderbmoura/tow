import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildaPage } from './guilda.page';

const routes: Routes = [
  {
    path: '',
    component: GuildaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuildaPageRoutingModule {}
