import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuildaPageRoutingModule } from './guilda-routing.module';

import { GuildaPage } from './guilda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuildaPageRoutingModule
  ],
  declarations: [GuildaPage]
})
export class GuildaPageModule {}
