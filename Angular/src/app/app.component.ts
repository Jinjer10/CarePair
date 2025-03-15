// <<<<<<< HEAD
// // import { RouterModule } from '@angular/router';
// // import { Component } from '@angular/core';
// // import { HeaderComponent } from './header/header.component';
// // import { HomePageComponent } from './homePage/homePage.component';
// // import { SignUpComponent } from './signUp/signUp.component';
// // import { AboutComponent } from './about/about.component';
// // import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
// // import { HttpClientModule } from '@angular/common/http'; // הוסף את ה-HttpClientModule
// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [HeaderComponent, HomePageComponent, SignUpComponent,
// //      AboutComponent,SignUpVolunteerComponent, RouterModule,
// //      HttpClientModule ], // מוודא שה-import של RouterModule נמצא כאן
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {}
// import { Component } from '@angular/core';
// import { EnumDataService } from '../services/enum-data.service'; // לוודא שהשירות מיובא כראוי
// =======
// import { Component } from '@angular/core';
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
// import { RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { HomePageComponent } from './homePage/homePage.component';
// import { SignUpComponent } from './signUp/signUp.component';
// import { AboutComponent } from './about/about.component';
// import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
// <<<<<<< HEAD
// import { HttpClientModule } from '@angular/common/http';
// =======
// import { SignInComponent } from './sign-in/sign-in.component';
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     HeaderComponent,
//     HomePageComponent,
//     SignUpComponent,
//     AboutComponent,
//     SignUpVolunteerComponent,
// <<<<<<< HEAD
//     RouterModule,
//     HttpClientModule
// =======
//     SignInComponent,
//     RouterModule,
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
// <<<<<<< HEAD
//   constructor(private enumDataService: EnumDataService) {
//     // קריאה לדוגמה לכל אינם
//     this.enumDataService.getEnumData('Gender').subscribe(genders => {
//       console.log('Genders:', genders);
//     });

//     this.enumDataService.getEnumData('Language').subscribe(languages => {
//       console.log('Languages:', languages);
//     });

//     this.enumDataService.getEnumData('Interests').subscribe(interests => {
//       console.log('Interests:', interests);
//     });

//     // אם תרצה לגשת לאינמים נוספים:
//     this.enumDataService.getEnumData('AgeGroup').subscribe(ageGroups => {
//       console.log('Age Groups:', ageGroups);
//     });

//     // תוכל להוסיף כאן קריאות נוספות לפי הצורך.
//   }
// }

// =======
// }
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homePage/homePage.component';
import { SignUpComponent } from './signUp/signUp.component';
import { AboutComponent } from './about/about.component';
import { SignUpVolunteerComponent } from './signUpVolunteer/signUpVolunteer.component';
import { SignInComponent } from './sign-in/sign-in.component'; // מהגרסה החדשה
// import { HttpClientModule } from '@angular/common/http'; // מהגרסה הישנה
import { EnumDataService } from '../services/enum-data.service'; // מהגרסה הישנה

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomePageComponent,
    SignUpComponent,
    AboutComponent,
    SignUpVolunteerComponent,
    SignInComponent, // מהגרסה החדשה
    RouterModule,
    // HttpClientModule // מהגרסה הישנה
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private enumDataService: EnumDataService) { // מהגרסה הישנה
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