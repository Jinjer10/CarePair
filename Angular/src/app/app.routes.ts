// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core'; // ייבוא NgModule
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    { path: '', component: HomePageComponent }, // דף הבית (נתיב ברירת מחדל)
    { path: 'signUp', component:  SignUpComponent }, // דף ההרשמה
    { path: 'about', component:  AboutComponent }, // דף אודות
];


@NgModule({
    imports: [RouterModule.forRoot(routes)], // מייבא את ה-RouterModule עם הנתיבים
    exports: [RouterModule] // מייצא אותו כך שיהיה זמין באפליקציה
  })
  export class AppRoutingModule {}