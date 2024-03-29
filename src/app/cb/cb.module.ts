import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbPageRoutingModule } from './cb-routing.module';

import { CbPage } from './cb.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CbPage
      }
    ]),
    TranslateModule
  ],
  declarations: [CbPage]
})
export class CbPageModule {}
