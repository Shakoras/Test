import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachInscriptionComponent } from './coach-inscription.component';

describe('CoachInscriptionComponent', () => {
  let component: CoachInscriptionComponent;
  let fixture: ComponentFixture<CoachInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
