import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamaPageRoutingModule } from './fama-routing.module';

import { FamaPage } from './fama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamaPageRoutingModule
  ],
  declarations: [FamaPage]
})
export class FamaPageModule {}
