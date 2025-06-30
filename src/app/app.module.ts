import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './shared/cards/cards.module';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { CarouselModule } from './shared/carousel/carousel.module';
import { CreateHeroesComponent } from './create-heroes/create-heroes.component';
import { VillainsModule } from './villains/villains.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateVillainsComponent } from './create-villains/create-villains.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CreateHeroesComponent,
    CreateVillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    HomeModule,
    CardsModule,
    FooterModule,
    HeaderModule,
    CarouselModule,
    VillainsModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
