import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuildaPageRoutingModule } from './guilda-routing.module';

import { GuildaPage } from './guilda.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuildaPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: GuildaPage
      }
    ]),
    TranslateModule
  ],
  declarations: [GuildaPage]
})
export class GuildaPageModule {}
