import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConchasPageRoutingModule } from './conchas-routing.module';

import { ConchasPage } from './conchas.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConchasPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConchasPage
      }
    ]),
    TranslateModule
  ],
  declarations: [ConchasPage]
})
export class ConchasPageModule {}
