import { LanguagePopoverPage } from './../pages/language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AdmobFreeService } from '../services/admobfree.service';

@Component({
  selector: 'app-guardiao',
  templateUrl: './guardiao.page.html',
  styleUrls: ['./guardiao.page.scss'],
})
export class GuardiaoPage implements OnInit {

  constructor(private translate: TranslateService, private popoverCtrl: PopoverController, private alertCtrl: AlertController, private admobFreeService: AdmobFreeService) { }

  ngOnInit() {
    this.admobFreeService.BannerAd();
  }

  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }
  
  showRewardVideo(){
    this.admobFreeService.RewardVideoAd();
  }


  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}
