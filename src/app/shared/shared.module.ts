import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent }  from '../hero-search/hero-search.component';
import { HeroService }          from '../hero.service';
import { MessageService }       from '../message.service';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  exports:[HeroSearchComponent],
  declarations: [
    HeroSearchComponent
  ],
  providers: [ HeroService, MessageService ],
})
export class SharedModule { }
