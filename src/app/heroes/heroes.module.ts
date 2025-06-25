import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
