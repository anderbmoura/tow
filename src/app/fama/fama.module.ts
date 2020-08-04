import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamaPageRoutingModule } from './fama-routing.module';

import { FamaPage } from './fama.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamaPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FamaPage
      }
    ]),
    TranslateModule
  ],
  declarations: [FamaPage]
})
export class FamaPageModule {}
