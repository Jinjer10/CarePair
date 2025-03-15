// <<<<<<< HEAD
// // // // // 
// // // // import { Component, OnInit } from '@angular/core';
// // // // import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// // // // import { CommonModule } from '@angular/common'; // נדרש עבור *ngFor
// // // // import { ReactiveFormsModule } from '@angular/forms'; // נדרש עבור Reactive Forms
// // // // import { EnumDataService } from '../../services/enum-data.service';

// // // // @Component({
// // // //   selector: 'app-sign-up-volunteer',
// // // //   standalone: true, // קומפוננטה עצמאית
// // // //   imports: [CommonModule, ReactiveFormsModule], // ייבוא המודולים הנדרשים
// // // //   templateUrl: './sign-up-volunteer.component.html',
// // // //   styleUrls: ['./sign-up-volunteer.component.css']
// // // // })
// // // // export class SignUpVolunteerComponent implements OnInit {
// // // //   signUpForm!: FormGroup;

// // // //   genders: any[] = [];
// // // //   languages: any[] = [];
// // // //   interests: any[] = [];
// // // //   ageGroups: any[] = [];
// // // //   areas: any[] = [];
// // // //   cities: any[] = [];

// // // //   constructor(
// // // //     private fb: FormBuilder,
// // // //     private enumService: EnumDataService
// // // //   ) {}

// // // //   ngOnInit(): void {
// // // //     this.signUpForm = this.fb.group({
// // // //       fullName: ['', Validators.required],
// // // //       password: ['', Validators.required],
// // // //       email: ['', [Validators.required, Validators.email]],
// // // //       phone: ['', Validators.required],
// // // //       birthDate: ['', Validators.required],
// // // //       extraDetails: [''],
// // // //       area: ['', Validators.required],
// // // //       city: ['', Validators.required],
// // // //       gender: ['', Validators.required],
// // // //       availableTimes: this.fb.array([]),
// // // //       language: [[], Validators.required], // שפות שהמתנדב דובר
// // // //       languagePreference: [[], Validators.required], // העדפת שפות של המטופל
// // // //       interests: [[], Validators.required], // תחומי עניין של המתנדב
// // // //       genderPreference: [[], Validators.required], // העדפת מגדר של המטופל
// // // //       agePreference: ['', Validators.required],
// // // //       religiosityPreference: ['', Validators.required],
// // // //       wardPreference: ['', Validators.required]
// // // //     });

// // // //     this.loadEnums();
// // // //   }

// // // //   loadEnums(): void {
// // // //     this.enumService.getGenders().subscribe(data => this.genders = data);
// // // //     this.enumService.getLanguages().subscribe(data => this.languages = data);
// // // //     this.enumService.getInterests().subscribe(data => this.interests = data);
// // // //     this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
// // // //     this.enumService.getAreas().subscribe(data => this.areas = data);
// // // //     this.enumService.getCities().subscribe(data => this.cities = data);
// // // //   }

// // // //   get availableTimes(): FormArray {
// // // //     return this.signUpForm.get('availableTimes') as FormArray;
// // // //   }

// // // //   addAvailableTime(): void {
// // // //     this.availableTimes.push(
// // // //       this.fb.group({
// // // //         day: ['', Validators.required],
// // // //         startTime: ['', Validators.required],
// // // //         endTime: ['', Validators.required]
// // // //       })
// // // //     );
// // // //   }

// // // //   removeAvailableTime(index: number): void {
// // // //     this.availableTimes.removeAt(index);
// // // //   }

// // // //   onSubmit(): void {
// // // //     if (this.signUpForm.invalid) {
// // // //       this.signUpForm.markAllAsTouched(); // סמן את כל השדות כ"נגועים" להצגת שגיאות ב-UI
// // // //       return;
// // // //     }
// // // //     console.log('טופס תקין:', this.signUpForm.value);
// // // //     // כאן תוכל לשלוח את הנתונים לשרת, לדוגמה:
// // // //     // this.someService.submitForm(this.signUpForm.value).subscribe();
// // // //   }
// // // // }

// // // // import { Component, OnInit } from '@angular/core';
// // // // import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// // // // import { CommonModule } from '@angular/common';
// // // // import { ReactiveFormsModule } from '@angular/forms';
// // // // import { EnumDataService } from '../../services/enum-data.service';

// // // // import { VolunteerService, Volunteer, Time, Area, City, Gender, Language, Interests, AgeGroup, Religiosity } from '../../services/volunteer.service';
// // // import { Component, OnInit } from '@angular/core';
// // // import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// // // import { CommonModule } from '@angular/common';
// // // import { ReactiveFormsModule } from '@angular/forms';
// // // import { EnumDataService, EnumItem } from '../../services/enum-data.service'; // ייבוא EnumItem
// // // import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';


// // // @Component({
// // //   selector: 'app-sign-up-volunteer',
// // //   standalone: true,
// // //   imports: [CommonModule, ReactiveFormsModule],
// // //   templateUrl: './sign-up-volunteer.component.html',
// // //   styleUrls: ['./sign-up-volunteer.component.css']
// // // })
// // // export class SignUpVolunteerComponent implements OnInit {
// // //   signUpForm!: FormGroup;

// // //   genders: { key: string; value: string }[] = [];
// // //   languages: { key: string; value: string }[] = [];
// // //   interests: { key: string; value: string }[] = [];
// // //   ageGroups: { key: string; value: string }[] = [];
// // //   areas: { key: string; value: string }[] = [];
// // //   cities: { key: string; value: string }[] = [];

// // //   constructor(
// // //     private fb: FormBuilder,
// // //     private enumService: EnumDataService
// // //   ) {}

// // //   ngOnInit(): void {
// // //     this.signUpForm = this.fb.group({
// // //       fullName: ['', Validators.required],
// // //       password: ['', Validators.required],
// // //       email: ['', [Validators.required, Validators.email]],
// // //       phone: ['', Validators.required],
// // //       birthDate: ['', Validators.required],
// // //       extraDetails: [''],
// // //       area: ['', Validators.required],
// // //       city: ['', Validators.required],
// // //       gender: ['', Validators.required],
// // //       availableTimes: this.fb.array([]),
// // //       language: [[], Validators.required], // שפות שהמתנדב דובר
// // //       interests: [[], Validators.required], // תחומי עניין של המתנדב
// // //       agePreference: ['', Validators.required],
// // //       languagePreference: [[], Validators.required], // העדפת שפות של המטופל
// // //       genderPreference: [[], Validators.required], // העדפת מגדר של המטופל
// // //       religiosityPreference: ['', Validators.required]
// // //       // שים לב: wardPreference לא מופיע ב-HTML, אז השארתי אותו מחוץ לטופס כרגע
// // //     });

// // //     this.loadEnums();
// // //   }

// // //   loadEnums(): void {
// // //     this.enumService.getGenders().subscribe(data => this.genders = data);
// // //     this.enumService.getLanguages().subscribe(data => this.languages = data);
// // //     this.enumService.getInterests().subscribe(data => this.interests = data);
// // //     this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
// // //     this.enumService.getAreas().subscribe(data => this.areas = data);
// // //     this.enumService.getCities().subscribe(data => this.cities = data);
// // //   }

// // //   get availableTimes(): FormArray {
// // //     return this.signUpForm.get('availableTimes') as FormArray;
// // //   }

// // //   addAvailableTime(): void {
// // //     this.availableTimes.push(
// // //       this.fb.group({
// // //         day: ['', Validators.required],
// // //         startTime: ['', Validators.required],
// // //         endTime: ['', Validators.required]
// // //       })
// // //     );
// // //   }

// // //   removeAvailableTime(index: number): void {
// // //     this.availableTimes.removeAt(index);
// // //   }
// // //   onSubmit(): void {
// // //     if (this.signUpForm.invalid) {
// // //       this.signUpForm.markAllAsTouched();
// // //       console.log('טופס לא תקין:', this.signUpForm.errors);
// // //       return;
// // //     }

// // //     // המרת הנתונים לפורמט שמתאים לשרת
// // //     const formValue = this.signUpForm.value;
// // //     const volunteer: Volunteer = {
// // //       id: 0, // השרת יקצה ID
// // //       fullName: formValue.fullName,
// // //       phone: formValue.phone,
// // //       birthDate: formValue.birthDate, // נשלח כ-"YYYY-MM-DD"
// // //       password: formValue.password,
// // //       email: formValue.email,
// // //       extraDetailse: formValue.extraDetails || '',
// // //       areaJson: JSON.stringify({ key: formValue.area }), // המרה ל-JSON
// // //       cityJson: JSON.stringify({ key: formValue.city }),
// // //       genderJson: JSON.stringify({ key: formValue.gender }),
// // //       availableTimesJson: JSON.stringify(formValue.availableTimes),
// // //       religiosityJson: JSON.stringify({ key: formValue.religiosityPreference }), // בהנחה שזה ערך יחיד
// // //       languageJson: JSON.stringify(formValue.language.map((lang: string) => ({ key: lang }))),
// // //       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((lang: string) => ({ key: lang }))),
// // //       interestsJson: JSON.stringify(formValue.interests.map((interest: string) => ({ key: interest }))),
// // //       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((gender: string) => ({ key: gender }))),
// // //       agePreferenceJson: JSON.stringify([{ key: formValue.agePreference }]), // כרגע יחיד, שנה אם צריך ריבוי
// // //       religiosityPreferenceJson: JSON.stringify([{ key: formValue.religiosityPreference }]),
// // //       wardPreferenceJson: JSON.stringify([]) // לא קיים בטופס כרגע, שלח ריק
// // //     };

// // //     this.olunteerService.addVolunteer(volunteer).subscribe({
// // //       next: () => {
// // //         console.log('מתנדב נוסף בהצלחה!');
// // //         this.signUpForm.reset();
// // //       },
// // //       error: (err) => {
// // //         console.error('שגיאה בשליחת הטופס:', err);
// // //       }
// // //     });
// // //   }

// // // }

// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { ReactiveFormsModule } from '@angular/forms';
// // import { EnumDataService, EnumItem } from '../../services/enum-data.service';
// // import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';

// // @Component({
// //   selector: 'app-sign-up-volunteer',
// //   standalone: true,
// //   imports: [CommonModule, ReactiveFormsModule],
// //   templateUrl: './sign-up-volunteer.component.html',
// //   styleUrls: ['./sign-up-volunteer.component.css']
// // })
// // export class SignUpVolunteerComponent implements OnInit {
// //   signUpForm!: FormGroup;

// //   genders: EnumItem[] = [];
// //   languages: EnumItem[] = [];
// //   interests: EnumItem[] = [];
// //   ageGroups: EnumItem[] = [];
// //   areas: EnumItem[] = [];
// //   cities: EnumItem[] = [];

// //   constructor(
// //     private fb: FormBuilder,
// //     private enumService: EnumDataService,
// //     private volunteerService: VolunteerService
// //   ) {}

// //   ngOnInit(): void {
// //     this.signUpForm = this.fb.group({
// //       fullName: ['', Validators.required],
// //       password: ['', Validators.required],
// //       email: ['', [Validators.required, Validators.email]],
// //       phone: ['', Validators.required],
// //       birthDate: ['', Validators.required],
// //       extraDetails: [''],
// //       area: ['', Validators.required],
// //       city: ['', Validators.required],
// //       gender: ['', Validators.required],
// //       availableTimes: this.fb.array([]),
// //       language: [[], Validators.required],
// //       interests: [[], Validators.required],
// //       agePreference: ['', Validators.required],
// //       languagePreference: [[], Validators.required],
// //       genderPreference: [[], Validators.required],
// //       religiosityPreference: ['', Validators.required]
// //     });

// //     this.loadEnums();
// //   }

// //   loadEnums(): void {
// //     this.enumService.getGenders().subscribe(data => this.genders = data);
// //     this.enumService.getLanguages().subscribe(data => this.languages = data);
// //     this.enumService.getInterests().subscribe(data => this.interests = data);
// //     this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
// //     this.enumService.getAreas().subscribe(data => this.areas = data);
// //     this.enumService.getCities().subscribe(data => this.cities = data);
// //   }

// //   get availableTimes(): FormArray {
// //     return this.signUpForm.get('availableTimes') as FormArray;
// //   }

// //   addAvailableTime(): void {
// //     this.availableTimes.push(
// //       this.fb.group({
// //         day: ['', Validators.required],
// //         startTime: ['', Validators.required],
// //         endTime: ['', Validators.required]
// //       })
// //     );
// //   }

// //   removeAvailableTime(index: number): void {
// //     this.availableTimes.removeAt(index);
// //   }

// //   onSubmit(): void {
// //     if (this.signUpForm.invalid) {
// //       this.signUpForm.markAllAsTouched();
// //       console.log('טופס לא תקין:', this.signUpForm.errors);
// //       return;
// //     }

// //     const formValue = this.signUpForm.value;
// //     const volunteer: Volunteer = {
// //       id: 0, // השרת יקצה ID
// //       fullName: formValue.fullName,
// //       phone: formValue.phone,
// //       birthDate: formValue.birthDate, // "YYYY-MM-DD"
// //       password: formValue.password,
// //       email: formValue.email,
// //       extraDetailse: formValue.extraDetails || '',
// //       areaJson: JSON.stringify({ key: formValue.area }),
// //       cityJson: JSON.stringify({ key: formValue.city }),
// //       genderJson: JSON.stringify({ key: formValue.gender }),
// //       availableTimesJson: JSON.stringify(formValue.availableTimes as Time[]),
// //       religiosityJson: JSON.stringify({ key: formValue.religiosityPreference }),
// //       languageJson: JSON.stringify(formValue.language.map((lang: string) => ({ key: lang }))),
// //       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((lang: string) => ({ key: lang }))),
// //       interestsJson: JSON.stringify(formValue.interests.map((interest: string) => ({ key: interest }))),
// //       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((gender: string) => ({ key: gender }))),
// //       agePreferenceJson: JSON.stringify([{ key: formValue.agePreference }]),
// //       religiosityPreferenceJson: JSON.stringify([{ key: formValue.religiosityPreference }]),
// //       wardPreferenceJson: JSON.stringify([]) // לא קיים בטופס כרגע
// //     };

// //     this.volunteerService.addVolunteer(volunteer).subscribe({
// //       next: () => {
// //         console.log('מתנדב נוסף בהצלחה!');
// //         this.signUpForm.reset();
// //       },
// //       error: (err) => {
// //         console.error('שגיאה בשליחת הטופס:', err);
// //       }
// //     });
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { EnumDataService, EnumItem } from '../../services/enum-data.service';
// import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';

// @Component({
//   selector: 'app-sign-up-volunteer',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
// =======
// // 
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common'; // נדרש עבור *ngFor
// import { ReactiveFormsModule } from '@angular/forms'; // נדרש עבור Reactive Forms
// import { EnumDataService,EnumItem } from '../../services/enum-data.service';
// import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
// @Component({
//   selector: 'app-sign-up-volunteer',
//   standalone: true, // קומפוננטה עצמאית
//   imports: [CommonModule, ReactiveFormsModule], // ייבוא המודולים הנדרשים
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
//   templateUrl: './sign-up-volunteer.component.html',
//   styleUrls: ['./sign-up-volunteer.component.css']
// })
// export class SignUpVolunteerComponent implements OnInit {
//   signUpForm!: FormGroup;

//   genders: EnumItem[] = [];
//   languages: EnumItem[] = [];
//   interests: EnumItem[] = [];
//   ageGroups: EnumItem[] = [];
//   areas: EnumItem[] = [];
//   cities: EnumItem[] = [];
//   religiosities: EnumItem[] = []; // הוספה

//   constructor(
//     private fb: FormBuilder,
//     private enumService: EnumDataService,
//     private volunteerService: VolunteerService
//   ) {}
// <<<<<<< HEAD

// =======
// >>>>>>> 4f3edf67e0f7b1ba5e67fb7143cc6ac4affe3a24
//   ngOnInit(): void {
//     this.signUpForm = this.fb.group({
//       fullName: ['', Validators.required],
//       password: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       birthDate: ['', Validators.required],
//       extraDetails: [''],
//       area: ['', Validators.required],
//       city: ['', Validators.required],
//       gender: ['', Validators.required],
//       availableTimes: this.fb.array([]),
//       language: [[], Validators.required],
//       interests: [[], Validators.required],
//       agePreference: ['', Validators.required],
//       languagePreference: [[], Validators.required],
//       genderPreference: [[], Validators.required],
//       religiosityPreference: ['', Validators.required]
//     });

//     this.loadEnums();
//   }

//   loadEnums(): void {
//     this.enumService.getGenders().subscribe(data => this.genders = data);
//     this.enumService.getLanguages().subscribe(data => this.languages = data);
//     this.enumService.getInterests().subscribe(data => this.interests = data);
//     this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
//     this.enumService.getAreas().subscribe(data => this.areas = data);
//     this.enumService.getCities().subscribe(data => this.cities = data);
//     this.enumService.getReligiosities().subscribe(data => this.religiosities = data); // הוספה
//   }

//   get availableTimes(): FormArray {
//     return this.signUpForm.get('availableTimes') as FormArray;
//   }

//   addAvailableTime(): void {
//     this.availableTimes.push(
//       this.fb.group({
//         day: ['', Validators.required],
//         startTime: ['', Validators.required],
//         endTime: ['', Validators.required]
//       })
//     );
//   }

//   removeAvailableTime(index: number): void {
//     this.availableTimes.removeAt(index);
//   }

//   onSubmit(): void {
//     if (this.signUpForm.invalid) {
//       this.signUpForm.markAllAsTouched();
//       console.log('טופס לא תקין:', this.signUpForm.errors);
//       return;
//     }

//     const formValue = this.signUpForm.value;
//     const volunteer: Volunteer = {
//       id: 0, // השרת יקצה ID
//       fullName: formValue.fullName,
//       phone: formValue.phone,
//       birthDate: formValue.birthDate, // "YYYY-MM-DD"
//       password: formValue.password,
//       email: formValue.email,
//       extraDetailse: formValue.extraDetails || '',
//       areaJson: JSON.stringify({ key: formValue.area }),
//       cityJson: JSON.stringify({ key: formValue.city }),
//       genderJson: JSON.stringify({ key: formValue.gender }),
//       availableTimesJson: JSON.stringify(formValue.availableTimes as Time[]),
//       religiosityJson: JSON.stringify({ key: formValue.religiosityPreference }),
//       languageJson: JSON.stringify(formValue.language.map((lang: string) => ({ key: lang }))),
//       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((lang: string) => ({ key: lang }))),
//       interestsJson: JSON.stringify(formValue.interests.map((interest: string) => ({ key: interest }))),
//       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((gender: string) => ({ key: gender }))),
//       agePreferenceJson: JSON.stringify([{ key: formValue.agePreference }]),
//       religiosityPreferenceJson: JSON.stringify([{ key: formValue.religiosityPreference }]),
//       wardPreferenceJson: JSON.stringify([]) // לא קיים בטופס כרגע
//     };
//     console.log('volunteer', volunteer);


//     this.volunteerService.addVolunteer(volunteer).subscribe({
//       next: () => {
//         console.log('מתנדב נוסף בהצלחה!');
//         this.signUpForm.reset();
//       },
//       error: (err) => {
//         console.error('שגיאה בשליחת הטופס:', err);
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumDataService } from '../../services/enum-data.service';
import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';

@Component({
  selector: 'app-sign-up-volunteer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-volunteer.component.html',
  styleUrls: ['./sign-up-volunteer.component.css']
})
export class SignUpVolunteerComponent implements OnInit {
  signUpForm!: FormGroup;

  genders: { key: string; value: string }[] = [];
  languages: { key: string; value: string }[] = [];
  interests: { key: string; value: string }[] = [];
  ageGroups: { key: string; value: string }[] = [];
  areas: { key: string; value: string }[] = [];
  cities: { key: string; value: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService,
    private volunteerService: VolunteerService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      extraDetails: [''],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      availableTimes: this.fb.array([]),
      language: [[], Validators.required],
      languagePreference: [[], Validators.required],
      agePreference: ['', Validators.required],
      religiosityPreference: ['', Validators.required]
    });
  }

  // ngOnInit(): void {
  //   this.loadEnums();
  // }

  loadEnums(): void {
    this.enumService.getGenders().subscribe(data => this.genders = data);
    this.enumService.getLanguages().subscribe(data => this.languages = data);
    this.enumService.getInterests().subscribe(data => this.interests = data);
    this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
    this.enumService.getAreas().subscribe(data => this.areas = data);
    this.enumService.getCities().subscribe(data => this.cities = data);
  }

  get availableTimes(): FormArray {
    return this.signUpForm.get('availableTimes') as FormArray;
  }

  addAvailableTime(): void {
    this.availableTimes.push(
      this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required]
      })
    );
  }

  // removeAvailableTime(index: number): void {
  //   this.availableTimes.removeAt(index);
  // }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      console.log('טופס לא תקין:', this.signUpForm.errors);
      return;
    }

    const formValue = this.signUpForm.value;
    // const volunteer: Volunteer = {
    //   id: 0,
    //   fullName: formValue.fullName,
    //   password: formValue.password,
    //   email: formValue.email,
    //   phone: formValue.phone,
    //   birthDate: formValue.birthDate,
    //   extraDetailse: formValue.extraDetails || '',
    //   areaJson: JSON.stringify({ key: formValue.area }),
    //   cityJson: formValue.city,
    //   genderJson: formValue.gender,
    //   availableTimesJson: JSON.stringify(formValue.availableTimes),
    //   languageJson: JSON.stringify(formValue.language),
    //   languagePreferenceJson: JSON.stringify(formValue.languagePreference),
    //   interestsJson: JSON.stringify(formValue.interests),
    //   agePreferenceJson: formValue.agePreference,
    //   religiosityPreferenceJson: formValue.religiosityPreference
    // };

const volunteer: Volunteer = {
  id: 0, // אם הערך מגיע מהשרת, אולי עדיף לשים כאן formValue.id
  fullName: formValue.fullName,
  password: formValue.password,
  email: formValue.email,
  phone: formValue.phone,
  birthDate: formValue.birthDate,
  cityJson: formValue.city,
  areaJson: formValue.area,
  genderJson: formValue.gender,
  availableTimesJson: JSON.stringify(formValue.availableTimes),
  languageJson: JSON.stringify(formValue.language),
  languagePreferenceJson: JSON.stringify(formValue.languagePreference),
  religiosityJson: formValue.religiosity, // הוסף שדה חסר
  genderPreferenceJson: formValue.genderPreference, // הוסף שדה חסר
  wardPreferenceJson: formValue.wardPreference, // הוסף שדה חסר
  agePreferenceJson: formValue.agePreference,
  religiosityPreferenceJson: formValue.religiosityPreference,
  interestsJson: JSON.stringify(formValue.interests)
};


    this.volunteerService.addVolunteer(volunteer).subscribe(
      response => {
        console.log('הרשמה בוצעה בהצלחה', response);
      },
      error => {
        console.error('שגיאה בהרשמה', error);
      }
    );
  }

  removeAvailableTime(index: number): void {
    this.availableTimes.removeAt(index);
  }
}
