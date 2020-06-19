import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CozinharPageRoutingModule } from './cozinhar-routing.module';

import { CozinharPage } from './cozinhar.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CozinharPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CozinharPage
      }
    ]),
    TranslateModule
  ],
  declarations: [CozinharPage]
})
export class CozinharPageModule {}