import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from './../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrls: ['./create-heroes.component.scss'],
})
export class CreateHeroesComponent implements OnInit {

  constructor (private heroesService: HeroesService, private fb: FormBuilder){}

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [0,[Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      power: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      gender: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }
    ,
    {
      validator: this.senhasIguaisValidator
    }
  )
}

  private senhasIguaisValidator(formGroup: FormGroup ){
    const senha = formGroup.get('senha')?.value;
    const confirmSenha = formGroup.get('confirmSenha')?.value;
    return senha === confirmSenha ? null: {senhasDiferentes: true};

  }
  controle(campo: string){
   return this.heroForm.get(campo);
    }

    onSubmit(){
      if (this.heroForm.invalid) {
        this.heroForm.markAllAsTouched();
        return;
      }

     const hero = {
      name: this.heroForm.get('name')?.value,
      age: this.heroForm.get('age')?.value,
      power: this.heroForm.get('power')?.value,
      gender: this.heroForm.get('gender')?.value
    };

    this.heroesService.createHero(hero).subscribe({
      next: (response) => {
        alert(response.message);
        this.heroForm.reset();
      },
      error: (error) => {
        console.error('Erro ao criar Herói:', error);
      }

    });

  }
}
