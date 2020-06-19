import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbPageRoutingModule } from './cb-routing.module';

import { CbPage } from './cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbPageRoutingModule
  ],
  declarations: [CbPage]
})
export class CbPageModule {}
