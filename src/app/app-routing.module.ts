import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { BonusPointComponent } from './bonus-point/bonus-point.component';

const routes: Routes = [
  { path: '', redirectTo: '/cl-dashborard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'bonusPoint', component: BonusPointComponent },
  { path: 'cl-dashborard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cl-heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
