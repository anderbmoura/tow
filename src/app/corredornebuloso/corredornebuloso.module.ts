import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorredornebulosoPageRoutingModule } from './corredornebuloso-routing.module';

import { CorredornebulosoPage } from './corredornebuloso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorredornebulosoPageRoutingModule
  ],
  declarations: [CorredornebulosoPage]
})
export class CorredornebulosoPageModule {}
