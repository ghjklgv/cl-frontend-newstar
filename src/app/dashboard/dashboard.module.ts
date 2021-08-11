import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent }  from '../hero-search/hero-search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
