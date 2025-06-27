import { Component } from '@angular/core';

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrls: ['./create-heroes.component.scss']
})
export class CreateHeroesComponent {
  name: string = '';
  age: number = 0;
  power: string = '';
  gender: string = '';

 submitHero(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.power);
    console.log(this.gender);
  }
}
