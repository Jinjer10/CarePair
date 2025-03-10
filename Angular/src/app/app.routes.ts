// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core'; // ייבוא NgModule
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
export const routes: Routes = [
    { path: '', component: HomePageComponent }, // דף הבית (נתיב ברירת מחדל)
    { path: 'signUp', component:  SignUpComponent }, // דף ניווט לסוגי רישום
    { path: 'signUpVolunteer', component:  SignUpVolunteerComponent }, // דף ההרשמה
    { path: 'about', component:  AboutComponent }, // דף אודות
];


// @NgModule({
//     declarations: [SignUpVolunteerComponent],
//     imports: [RouterModule.forRoot(routes),ReactiveFormsModule], // מייבא את ה-RouterModule עם הנתיבים
//     exports: [RouterModule] // מייצא אותו כך שיהיה זמין באפליקציה
//   })
//   export class AppRoutingModule {}
@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
      SignUpVolunteerComponent // ✅ מייבאים קומפוננטות standalone
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  