import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorredornebulosoPageRoutingModule } from './corredornebuloso-routing.module';

import { CorredornebulosoPage } from './corredornebuloso.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorredornebulosoPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CorredornebulosoPage
      }
    ]),
    TranslateModule
  ],
  declarations: [CorredornebulosoPage]
})
export class CorredornebulosoPageModule {}
