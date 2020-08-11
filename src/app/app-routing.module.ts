import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: 'dungeons',
    loadChildren: () => import('./dungeons/dungeons.module').then( m => m.DungeonsPageModule)
  },
  {
    path: 'farm',
    loadChildren: () => import('./farm/farm.module').then( m => m.FarmPageModule)
  },
  {
    path: 'cb',
    loadChildren: () => import('./cb/cb.module').then( m => m.CbPageModule)
  },
  {
    path: 'mercado',
    loadChildren: () => import('./mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'fama',
    loadChildren: () => import('./fama/fama.module').then( m => m.FamaPageModule)
  },
  {
    path: 'montariadeguerra',
    loadChildren: () => import('./montariadeguerra/montariadeguerra.module').then( m => m.MontariadeguerraPageModule)
  },
  {
    path: 'casteloceu',
    loadChildren: () => import('./casteloceu/casteloceu.module').then( m => m.CasteloceuPageModule)
  },
  {
    path: 'corredornebuloso',
    loadChildren: () => import('./corredornebuloso/corredornebuloso.module').then( m => m.CorredornebulosoPageModule)
  },
  {
    path: 'equipamentos',
    loadChildren: () => import('./equipamentos/equipamentos.module').then( m => m.EquipamentosPageModule)
  },
  {
    path: 'cartas',
    loadChildren: () => import('./cartas/cartas.module').then( m => m.CartasPageModule)
  },
  {
    path: 'conchas',
    loadChildren: () => import('./conchas/conchas.module').then( m => m.ConchasPageModule)
  },
  {
    path: 'guilda',
    loadChildren: () => import('./guilda/guilda.module').then( m => m.GuildaPageModule)
  },
  {
    path: 'guardiao',
    loadChildren: () => import('./guardiao/guardiao.module').then( m => m.GuardiaoPageModule)
  },
  {
    path: 'cozinhar',
    loadChildren: () => import('./cozinhar/cozinhar.module').then( m => m.CozinharPageModule)
  },
  {
    path: 'fada',
    loadChildren: () => import('./fada/fada.module').then( m => m.FadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
