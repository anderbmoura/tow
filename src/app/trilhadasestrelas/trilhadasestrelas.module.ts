import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrilhadasestrelasPageRoutingModule } from './trilhadasestrelas-routing.module';

import { TrilhadasestrelasPage } from './trilhadasestrelas.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrilhadasestrelasPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrilhadasestrelasPage
      }
    ]),
    TranslateModule
  ],
  declarations: [TrilhadasestrelasPage]
})
export class TrilhadasestrelasPageModule {}
