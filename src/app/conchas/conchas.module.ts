import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConchasPageRoutingModule } from './conchas-routing.module';

import { ConchasPage } from './conchas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConchasPageRoutingModule
  ],
  declarations: [ConchasPage]
})
export class ConchasPageModule {}
