import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasteloceuPageRoutingModule } from './casteloceu-routing.module';

import { CasteloceuPage } from './casteloceu.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasteloceuPageRoutingModule,
        RouterModule.forChild([
      {
        path: '',
        component: CasteloceuPage
      }
    ]),
    TranslateModule
  ],
  declarations: [CasteloceuPage]
})
export class CasteloceuPageModule {}
