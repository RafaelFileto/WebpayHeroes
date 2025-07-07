import { CarouselComponent } from './shared/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardsComponent } from './shared/cards/cards.component';
import { CreateHeroesComponent } from './create-heroes/create-heroes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateVillainsComponent } from './create-villains/create-villains.component';
import { VillainsComponent } from './villains/villains.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "heroes", component: HeroesComponent, pathMatch: "full"},
  {path: "villains", component: VillainsComponent, pathMatch: "full"},
  {path: "carousel", component: CarouselComponent, pathMatch: "full"},
  {path: "cards", component: CardsComponent, pathMatch: "full"},
  {path: "header", component: HeaderComponent, pathMatch: "full"},
  {path: "footer", component: FooterComponent, pathMatch: "full"},
  {path: "create-heroes", component: CreateHeroesComponent, pathMatch: "full"},
  {path: "create-villains", component: CreateVillainsComponent, pathMatch: "full"},
  {path: "list-heroes", component: ListHeroesComponent, pathMatch: "full"},


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
