// import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';


// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { AuthService } from '../../services/auth.service';
// // import { User } from '../../models/user.model';

// @Component({
//   selector: 'app-signUpVolunteer',
//   templateUrl: './signUpVolunteer.component.html',
//   styleUrls: ['./signUpVolunteer.component.css'],
// })
// export class SignUpVolunteerComponent {
// //   signupForm: FormGroup;
// //   successMessage: string = '';
// //   errorMessage: string = '';

// //   constructor(private fb: FormBuilder, private authService: AuthService) {
// //     this.signupForm = this.fb.group({
// //       fullName: ['', Validators.required],
// //       phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
// //       birthDate: ['', Validators.required],
// //       password: ['', [Validators.required, Validators.minLength(6)]],
// //       email: ['', [Validators.required, Validators.email]],
// //       extraDetails: [''],
// //       area: ['', Validators.required],
// //       city: ['', Validators.required],
// //       gender: ['', Validators.required],
// //       hospital: ['', Validators.required],
// //       ward: ['', Validators.required],
// //       religiosity: ['', Validators.required],
// //       requiredTimes: [[]],
// //       language: [[]],
// //       languagePreference: [[]],
// //       interests: [[]],
// //       genderPreference: [[]],
// //       agePreference: [[]],
// //       religiosityPreference: [[]]
// //     });
// //   }
// // 
//   onSubmit(): void {
//     // if (this.signupForm.invalid) {
//     //   return;
//     // }

//     // const user: User = this.signupForm.value;
//     // this.authService.signUp(user).subscribe({
//     //   next: (response) => {
//     //     this.successMessage = 'נרשמת בהצלחה!';
//     //     this.errorMessage = '';
//     //     this.signupForm.reset();
//     //   },
//     //   error: (error) => {
//     //     this.errorMessage = 'שגיאה בהרשמה. נסה שוב.';
//     //     this.successMessage = '';
//     //     console.error(error);
//     //   }
//     // });
//     console.log("on submit signUpVolunteer")
//   }
// }
// // @NgModule({
// //   declarations: [
// //     SignUpVolunteerComponent,
// //     // קומפוננטים נוספים
// //   ],
// //   imports: [
// //     ReactiveFormsModule,
// //     // מודולים נוספים
// //   ]
// // })
// // export class AppModule { }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signUpVolunteer',
  templateUrl: './signUpVolunteer.component.html',
  styleUrls: ['./signUpVolunteer.component.css'],
  imports: [ReactiveFormsModule] // אם יש שימוש ב-formControlName
})
export class SignUpVolunteerComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      extraDetails: [''],
      area: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      availableTimes: this.fb.array([]), // זה ה־FormArray של זמני זמינות
      language: [[], Validators.required],
      languagePreference: [[], Validators.required],
      interests: [[], Validators.required],
      genderPreference: [[], Validators.required],
      agePreference: ['', Validators.required],
      religiosityPreference: ['', Validators.required],
      wardPreference: ['', Validators.required],
    });

    this.addAvailableTime(); // הוספת טיים אחד לדוגמה
  }

  get availableTimes(): FormArray {
    return this.signUpForm.get('availableTimes') as FormArray;
  }

  addAvailableTime() {
    this.availableTimes.push(
      this.fb.group({
        day: [''],
        startTime: [''],
        endTime: ['']
      })
    );
  }

  onSubmit(): void {
    console.log("on submit signUpVolunteer", this.signUpForm.value);
  }
}
