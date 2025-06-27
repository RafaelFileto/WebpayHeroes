import { Component } from '@angular/core';

@Component({
  selector: 'app-create-villains',
  templateUrl: './create-villains.component.html',
  styleUrls: ['./create-villains.component.scss']
})
export class CreateVillainsComponent {
name: string = '';
age: number = 0;
power: string = '';
gender: string = '';

submitVillain(){
  console.log(this.name);
  console.log(this.age);
  console.log(this.power);
  console.log(this.gender);
}

}
