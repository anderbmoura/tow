import { Component } from '@angular/core';
 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.languageService.setInitialAppLanguage();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : 'COZINHAR.name',
        url   : "/cozinhar",
        icon  : "pizza-outline"
      },
      {
        title : 'FARM.name',
        url   : "/farm",
        icon  : "vegetal"
      },
      {
        title : 'CB.name',
        url   : "/cb",
        icon  : "thumbs-up-outline"
      },
      {
        title : 'MERCADO.name',
        url   : "/mercado",
        icon  : "cart-outline"
      },
      {
        title : 'FAMA.name',
        url   : "/fama",
        icon  : "star-outline"
      },
      {
        title : 'MONTARIADEGUERRA.name',
        url   : "/montariadeguerra",
        icon  : "dragao"
      },
      {
        title : 'CASTELOCEU.name',
        url   : "/casteloceu",
        icon  : "fortaleza"
      },
      {
        title : 'CORREDORNEBULOSO.name',
        url   : "/corredornebuloso",
        icon  : "nebulosa"
      },
      {
        title : 'EQUIPAMENTOS.name',
        url   : "/equipamentos",
        icon  : "espada"
      },
      {
        title : 'CARTAS.name',
        url   : "/cartas",
        icon  : "baralho"
      },
      {
        title : 'CONCHAS.name',
        url   : "/conchas",
        icon  : "molusco"
      },
      {
        title : 'GUILDA.name',
        url   : "/guilda",
        icon  : "grupo"
      },
      {
        title : 'GUARDIAO.name',
        url   : "/guardiao",
        icon  : "animal"
      },
    ]
  }
}
