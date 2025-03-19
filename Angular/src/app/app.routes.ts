

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { SignUpPatientComponent } from './signUpPatient/signUpPatient.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
// import { EnumDataService } from '../services/enum-data.service'; // לא נדרש כאן כרגע

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // דף הבית
  { path: 'signUp', component: SignUpComponent }, // דף ניווט לסוגי רישום
  { path: 'signUpVolunteer', component: SignUpVolunteerComponent }, // דף הרשמה למתנדבים
  { path: 'signUpPatient', component: SignUpPatientComponent }, // דף הרשמה לחולים
  { path: 'signIn', component: SignInComponent }, // דף כניסה
  { path: 'about', component: AboutComponent }, // דף אודות
  { path: 'personalArea', component: PersonalAreaComponent } // דף אזור אישי
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}