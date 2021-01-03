import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Coach } from '../models/coach.model';

interface Response {
  success: boolean,
  message: string
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

const params = new HttpParams({fromString: 'name=foo'});

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  coach: Coach = new Coach;
  coachList: Coach[] = [];

  /**
    * coach inscription
    */
  CoachInscription(
    nom: string,
    prenom: string,
    cin: string,
    age: string,
    tell: string,
    email: string,
    password: string,
    tarif: string,
    experience: string){
      return this.http.post<Response>(
          environment.api + "handlers/inscription.php", {
            nom, prenom, cin, age, tell, email, password, tarif, experience
      })
  }

  /**
   * retrieve all coaches from database
   */
  getAllCoach(){
    return this.http.get(environment.api + "handlers/");
  }

    /**
    * Send Mail for validation
    */
    SencMail(send_from: string){
      return this.http.post<Response>(
        environment.api + "handlers/sendMail.php?from="+send_from, send_from)
    }

}
