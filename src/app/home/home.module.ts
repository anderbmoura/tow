import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
