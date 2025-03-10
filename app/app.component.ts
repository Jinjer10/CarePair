import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomePageComponent, SignUpComponent, AboutComponent,ProfileComponent, RouterModule], // מוודא שה-import של RouterModule נמצא כאן
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
