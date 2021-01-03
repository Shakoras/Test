import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachInscriptionComponent } from './coach-inscription/coach-inscription.component';
import { InscriptionService } from './services/inscription.service';
import { CoachloginComponent } from './coachlogin/coachlogin.component';
import { AppmenuComponent } from './appmenu/appmenu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inscription', pathMatch: 'full' },
  { path: 'inscription', component: CoachInscriptionComponent, pathMatch: 'full' },
  {path: 'coachlogin', component: CoachloginComponent},
  {path: 'appmenu',component: AppmenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoachInscriptionComponent,
    CoachloginComponent,
    AppmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    FormBuilder,
    InscriptionService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
