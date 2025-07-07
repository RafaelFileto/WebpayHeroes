import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {



  constructor(private heroesService: HeroesService, private fb: FormBuilder) {}

  heroes: any[] = [];
  editHero: any = null;
  heroForm!: FormGroup;


  ngOnInit(): void {

    this.listHeroes();

     this.heroForm = this.fb.group({
       name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
       age: [0, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
       power: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
       gender: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]]
     }
    );
  }
  deleteHero(id : number){
    this.heroesService.removeHero(id).subscribe({
      next: (response) => {
        alert(response.message);
      },

      error: (error) => {
        console.error('Erro ao remover Herói', error);
      }
    })
  }

  startEdit(hero: any) {
    this.editHero = hero;
    this.heroForm.patchValue({
      name: hero.name,
      age: hero.age,
      power: hero.power,
      gender: hero.gender
    });
   }

  cancelEdit() {
    this.editHero = null;
    this.heroForm.reset();
  }

  listHeroes(){
    this.heroesService.listHeroes().subscribe({
      next: (response) => {
        this.heroes = response;
      },

      error: (error) => {
        console.error('Erro ao listar Heróis', error);
      }
    })
  }
  OnUpdate(id: any) {

    if (this.heroForm.invalid) {
      this.heroForm.markAllAsTouched();
      return;
    }

    const hero = {
      name: this.heroForm.get('name')?.value,
      age: this.heroForm.get('age')?.value,
      power: this.heroForm.get('power')?.value,
      gender: this.heroForm.get('gender')?.value,
    };

    this.heroesService.patchHero(id.toString(), hero). subscribe({
      next: (response) => {
        alert("Herói atualizado com sucesso!");
        this.editHero = null;
        this.heroForm.reset();
        this.listHeroes();
      },

      error: (error) => {
        console.error('Erro ao listar Heróis')
      }
    });
  }
}
