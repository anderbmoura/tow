import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmPageRoutingModule } from './farm-routing.module';

import { FarmPage } from './farm.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FarmPage
      }
    ]),
    TranslateModule
  ],
  declarations: [FarmPage]
})
export class FarmPageModule {}
