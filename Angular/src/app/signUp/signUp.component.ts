import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { User } from '../../models/user.model';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent {
//   signupForm: FormGroup;
//   successMessage: string = '';
//   errorMessage: string = '';

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.signupForm = this.fb.group({
//       fullName: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       birthDate: ['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       email: ['', [Validators.required, Validators.email]],
//       extraDetails: [''],
//       area: ['', Validators.required],
//       city: ['', Validators.required],
//       gender: ['', Validators.required],
//       hospital: ['', Validators.required],
//       ward: ['', Validators.required],
//       religiosity: ['', Validators.required],
//       requiredTimes: [[]],
//       language: [[]],
//       languagePreference: [[]],
//       interests: [[]],
//       genderPreference: [[]],
//       agePreference: [[]],
//       religiosityPreference: [[]]
//     });
//   }
// 
  onSubmit(): void {
    // if (this.signupForm.invalid) {
    //   return;
    // }

    // const user: User = this.signupForm.value;
    // this.authService.signUp(user).subscribe({
    //   next: (response) => {
    //     this.successMessage = 'נרשמת בהצלחה!';
    //     this.errorMessage = '';
    //     this.signupForm.reset();
    //   },
    //   error: (error) => {
    //     this.errorMessage = 'שגיאה בהרשמה. נסה שוב.';
    //     this.successMessage = '';
    //     console.error(error);
    //   }
    // });
    console.log("on submit signUp patient")
  }
}
