import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusPointComponent } from './bonus-point.component';
import {NineBlockComponent} from './nine-block/nine-block.component'
import { BsJs1Service } from './bs-js1.service';
import { CssGridComponent } from './css-grid/css-grid.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BonusPointComponent,
    NineBlockComponent,
    CssGridComponent
  ],
  exports: [
    BonusPointComponent
  ],
  providers: [
    BsJs1Service,
  ]
})
export class BonusPointModule { }
