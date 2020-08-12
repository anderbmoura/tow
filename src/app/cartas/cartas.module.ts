import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartasPageRoutingModule } from './cartas-routing.module';

import { CartasPage } from './cartas.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartasPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartasPage
      }
    ]),
    TranslateModule
  ],
  declarations: [CartasPage]
})
export class CartasPageModule {}
