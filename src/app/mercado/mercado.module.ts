import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercadoPageRoutingModule } from './mercado-routing.module';

import { MercadoPage } from './mercado.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercadoPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MercadoPage
      }
    ]),
    TranslateModule
  ],
  declarations: [MercadoPage]
})
export class MercadoPageModule {}
