import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVillainsComponent } from './create-villains.component';

describe('CreateVillainsComponent', () => {
  let component: CreateVillainsComponent;
  let fixture: ComponentFixture<CreateVillainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVillainsComponent]
    });
    fixture = TestBed.createComponent(CreateVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
