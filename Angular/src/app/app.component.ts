

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import {UpdateVolunteerComponent} from './update-volunteer/update-volunteer.component'
import { EnumDataService } from '../services/enum-data.service';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomePageComponent,
    SignUpComponent,
    AboutComponent,
    SignUpVolunteerComponent,
    SignInComponent,
    UpdateVolunteerComponent,
    UpdatePatientComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private enumDataService: EnumDataService) {
    // קריאה לדוגמה לכל אינם
    this.enumDataService.getEnumData('Gender').subscribe(genders => {
      console.log('Genders:', genders);
    });

    this.enumDataService.getEnumData('Language').subscribe(languages => {
      console.log('Languages:', languages);
    });

    this.enumDataService.getEnumData('Interests').subscribe(interests => {
      console.log('Interests:', interests);
    });

    this.enumDataService.getEnumData('AgeGroup').subscribe(ageGroups => {
      console.log('Age Groups:', ageGroups);
    });
  }
}