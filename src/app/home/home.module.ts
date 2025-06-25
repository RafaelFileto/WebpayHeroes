import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardsModule } from "../shared/cards/cards.module";
import { CarouselModule } from "../shared/carousel/carousel.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    CarouselModule
],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
