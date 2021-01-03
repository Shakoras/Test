
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-coachlogin',
  templateUrl: './coachlogin.component.html',
  styleUrls: ['./coachlogin.component.css']
})
export class CoachloginComponent {

  AddCoach: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _inscription: InscriptionService,
  ) {
    this.AddCoach = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

}
