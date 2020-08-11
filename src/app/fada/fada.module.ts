import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FadaPageRoutingModule } from './fada-routing.module';

import { FadaPage } from './fada.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FadaPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FadaPage
      }
    ]),
    TranslateModule
  ],
  declarations: [FadaPage]
})
export class FadaPageModule {}
