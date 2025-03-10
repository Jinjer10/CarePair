// import { RouterModule } from '@angular/router';
// import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
// import { HomePageComponent } from './homePage/homePage.component';
// import { SignUpComponent } from './signUp/signUp.component';
// import { AboutComponent } from './about/about.component';
// import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
// import { HttpClientModule } from '@angular/common/http'; // הוסף את ה-HttpClientModule
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [HeaderComponent, HomePageComponent, SignUpComponent,
//      AboutComponent,SignUpVolunteerComponent, RouterModule,
//      HttpClientModule ], // מוודא שה-import של RouterModule נמצא כאן
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {}
import { Component } from '@angular/core';
import { EnumDataService } from '../services/enum-data.service'; // לוודא שהשירות מיובא כראוי
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomePageComponent,
    SignUpComponent,
    AboutComponent,
    SignUpVolunteerComponent,
    RouterModule,
    HttpClientModule
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

    // אם תרצה לגשת לאינמים נוספים:
    this.enumDataService.getEnumData('AgeGroup').subscribe(ageGroups => {
      console.log('Age Groups:', ageGroups);
    });

    // תוכל להוסיף כאן קריאות נוספות לפי הצורך.
  }
}

