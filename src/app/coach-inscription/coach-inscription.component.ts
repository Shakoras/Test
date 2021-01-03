import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ɵDomAdapter } from '@angular/common';

@Component({
  selector: 'app-coach-inscription',
  templateUrl: './coach-inscription.component.html',
  styleUrls: ['./coach-inscription.component.css']
})
export class CoachInscriptionComponent implements OnInit {

  checkoutForm: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _inscription: InscriptionService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      last_name: '',
      email: '',
      password: '',
      cin: '',
      experience: '',
      phone: '',
      age: '',
      tax: '',
      tell: '',
    });
  }

  ngOnInit(): void {
  }

  email: any;

  Inscription(data: any, event: any): void {
    event.preventDefault();
    this.email = data.email
    if (
      data.name=="" || data.last_name=="" || data.cin=="" || data.age=="" || data.tell=="" || data.email=="" || data.password=="" ||
      data.tax=="" || data.experience==""
    ){
      Swal.fire({
        icon: 'info',
        title: 'Empty Slots...',
        text: 'Please fill in the form!'
      })
    }else if (data.cin.length != 8){
      Swal.fire({
        icon: 'info',
        title: 'Cin Invalid...',
        text: 'Please make sure your Cin contains 8 numbers!'
      })
    }else if (data.age.length > 2 || data.age.length < 2){
      Swal.fire({
        icon: 'info',
        title: 'Age Invalid...',
        text: 'Please make sure your age contains 2 numbers!'
      })
    }else if (data.tell.length != 8){
      Swal.fire({
        icon: 'info',
        title: 'Phone number invalid...',
        text: 'Please make sure your phone number contains 8 numbers!'
      })
    }else{
        this._inscription.CoachInscription(
          data.name, data.last_name, data.cin, data.age, data.tell, data.email, data.password, data.tax, data.experience
        ).subscribe(
          data =>{
            if (data.success){
                this.checkoutForm.reset();
                Swal.fire({
                  icon: 'success',
                  title: 'Success...',
                  text: 'Your request has been sent. Please wait till our Administrator validate your request!',
                  footer: "<h6>You'll be emailed within 24h</h6>"
                })
            } else
              console.log(data.message);
          },error =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: "can't send your request for some reason. Please try again later!"
            })
          }
        );
    }
  }
}
