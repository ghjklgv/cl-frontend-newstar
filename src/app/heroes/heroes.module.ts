import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeroesRoutingModule,
  ],
})
export class HeroesModule { }
