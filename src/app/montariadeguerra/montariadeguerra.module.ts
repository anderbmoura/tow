import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontariadeguerraPageRoutingModule } from './montariadeguerra-routing.module';

import { MontariadeguerraPage } from './montariadeguerra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontariadeguerraPageRoutingModule
  ],
  declarations: [MontariadeguerraPage]
})
export class MontariadeguerraPageModule {}
