import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderModule } from '../shared/header/header.module';



@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
