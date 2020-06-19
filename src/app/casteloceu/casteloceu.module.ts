import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasteloceuPageRoutingModule } from './casteloceu-routing.module';

import { CasteloceuPage } from './casteloceu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasteloceuPageRoutingModule
  ],
  declarations: [CasteloceuPage]
})
export class CasteloceuPageModule {}
