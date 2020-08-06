import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardiaoPageRoutingModule } from './guardiao-routing.module';

import { GuardiaoPage } from './guardiao.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardiaoPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: GuardiaoPage
      }
    ]),
    TranslateModule
  ],
  declarations: [GuardiaoPage]
})
export class GuardiaoPageModule {}
