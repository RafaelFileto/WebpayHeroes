import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainsComponent } from './villains.component';
import { HeaderModule } from "../shared/header/header.module";
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    VillainsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule
],
  exports: [
    VillainsComponent
  ]

})
export class VillainsModule { }
