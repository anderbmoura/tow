import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardiaoPageRoutingModule } from './guardiao-routing.module';

import { GuardiaoPage } from './guardiao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardiaoPageRoutingModule
  ],
  declarations: [GuardiaoPage]
})
export class GuardiaoPageModule {}
