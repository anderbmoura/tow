import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontariadeguerraPageRoutingModule } from './montariadeguerra-routing.module';

import { MontariadeguerraPage } from './montariadeguerra.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontariadeguerraPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MontariadeguerraPage
      }
    ]),
    TranslateModule
  ],
  declarations: [MontariadeguerraPage]
})
export class MontariadeguerraPageModule {}
