import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomePageComponent, SignUpComponent, AboutComponent,SignUpVolunteerComponent, RouterModule], // מוודא שה-import של RouterModule נמצא כאן
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
