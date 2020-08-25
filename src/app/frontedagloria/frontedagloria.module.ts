import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontedagloriaPageRoutingModule } from './frontedagloria-routing.module';

import { FrontedagloriaPage } from './frontedagloria.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontedagloriaPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FrontedagloriaPage
      }
    ]),
    TranslateModule
  ],
  declarations: [FrontedagloriaPage]
})
export class FrontedagloriaPageModule {}
