// // // import { Routes } from '@angular/router';
// // import { NgModule } from '@angular/core'; // ייבוא NgModule
// // import { RouterModule, Routes } from '@angular/router';
// // import { HomePageComponent } from './homePage/homePage.component';
// // import { SignUpComponent } from './signUp/signUp.component';
// // import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
// // import { AboutComponent } from './about/about.component';
// // import { ReactiveFormsModule } from '@angular/forms';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { HttpClientModule } from '@angular/common/http'; // הוספת הייבוא של HttpClientModule
// // import { AppComponent } from './app.component';
// // import { EnumDataService } from '../services/enum-data.service'; // שירות שלך
// // export const routes: Routes = [
// //     { path: '', component: HomePageComponent }, // דף הבית (נתיב ברירת מחדל)
// //     { path: 'signUp', component:  SignUpComponent }, // דף ניווט לסוגי רישום
// //     { path: 'signUpVolunteer', component:  SignUpVolunteerComponent }, // דף ההרשמה
// //     { path: 'about', component:  AboutComponent }, // דף אודות
// // ];


// // // @NgModule({
// // //     declarations: [SignUpVolunteerComponent],
// // //     imports: [RouterModule.forRoot(routes),ReactiveFormsModule], // מייבא את ה-RouterModule עם הנתיבים
// // //     exports: [RouterModule] // מייצא אותו כך שיהיה זמין באפליקציה
// // //   })
// // //   export class AppRoutingModule {}
// // @NgModule({
// //     imports: [
// //       RouterModule.forRoot(routes),
// //       ReactiveFormsModule,
// //       SignUpVolunteerComponent // ✅ מייבאים קומפוננטות standalone
// //     ],
// //     exports: [RouterModule]
// //   })
// //   export class AppRoutingModule {}
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './homePage/homePage.component';
// import { SignUpComponent } from './signUp/signUp.component';
// import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
// <<<<<<< HEAD
// import { AboutComponent } from './about/about.component';
// =======
// import { SignUpPatientComponent } from './signUpPatient/signUpPatient.component';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { AboutComponent } from './about/about.component';
// import { PersonalAreaComponent } from './personal-area/personal-area.component';
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24

// export const routes: Routes = [
//   { path: '', component: HomePageComponent }, // דף הבית
//   { path: 'signUp', component: SignUpComponent }, // דף ניווט לסוגי רישום
//   { path: 'signUpVolunteer', component: SignUpVolunteerComponent }, // דף ההרשמה
// <<<<<<< HEAD
//   { path: 'about', component: AboutComponent }, // דף אודות
// =======
//   { path: 'signUpPatient', component: SignUpPatientComponent }, // דף ההרשמה
//   { path: 'signIn', component: SignInComponent }, // דף כניסה
//   { path: 'about', component: AboutComponent }, // דף אודות
//   { path: 'personalArea', component: PersonalAreaComponent }, // דף אודות
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)], // מייבא את ה-RouterModule עם הנתיבים
//   exports: [RouterModule] // מייצא אותו כך שיהיה זמין באפליקציה
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { SignUpPatientComponent } from './signUpPatient/signUpPatient.component'; // מהגרסה החדשה
import { SignInComponent } from './sign-in/sign-in.component'; // מהגרסה החדשה
import { AboutComponent } from './about/about.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component'; // מהגרסה החדשה
import { ReactiveFormsModule } from '@angular/forms'; // מהגרסה הישנה
import { HttpClientModule } from '@angular/common/http'; // מהגרסה הישנה
import { EnumDataService } from '../services/enum-data.service'; // מהגרסה הישנה

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // דף הבית
  { path: 'signUp', component: SignUpComponent }, // דף ניווט לסוגי רישום
  { path: 'signUpVolunteer', component: SignUpVolunteerComponent }, // דף ההרשמה
  { path: 'signUpPatient', component: SignUpPatientComponent }, // דף ההרשמה - מהגרסה החדשה
  { path: 'signIn', component: SignInComponent }, // דף כניסה - מהגרסה החדשה
  { path: 'about', component: AboutComponent }, // דף אודות
  { path: 'personalArea', component: PersonalAreaComponent }, // דף אזור אישי - מהגרסה החדשה
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule, // מהגרסה הישנה
    HttpClientModule // מהגרסה הישנה
  ],
  exports: [RouterModule] // מייצא אותו כך שיהיה זמין באפליקציה
})
export class AppRoutingModule {}