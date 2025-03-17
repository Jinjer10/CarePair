

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { EnumDataService } from '../../services/enum-data.service';
// import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
// import { forkJoin } from 'rxjs'; // נוסיף את זה כדי לחכות לכל הנתונים

// @Component({
//   selector: 'app-sign-up-volunteer',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './sign-up-volunteer.component.html',
//   styleUrls: ['./sign-up-volunteer.component.scss']
// })
// export class SignUpVolunteerComponent implements OnInit {
//   signUpForm!: FormGroup;
//   isFormReady: boolean = false; // משתנה חדש לשליטה בהצגת הטופס

//   genders: { key: string; value: string }[] = [];
//   languages: { key: string; value: string }[] = [];
//   interests: { key: string; value: string }[] = [];
//   ageGroups: { key: string; value: string }[] = [];
//   areas: { key: string; value: string }[] = [];
//   cities: { key: string; value: string }[] = [];
//   religiosities: { key: string; value: string }[] = [];
//   wards: { key: string; value: string }[] = [];

//   constructor(
//     private fb: FormBuilder,
//     private enumService: EnumDataService,
//     private volunteerService: VolunteerService
//   ) {}

//   ngOnInit(): void {
//     this.initializeForm();
//     this.loadEnums();
//   }

//   initializeForm(): void {
//     this.signUpForm = this.fb.group({
//       fullName: ['', Validators.required],
//       password: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       birthDate: ['', Validators.required],
//       extraDetailse: [''],
//       area: ['', Validators.required],
//       city: ['', Validators.required],
//       gender: ['', Validators.required],
//       availableTimes: this.fb.array([]),
//       religiosity: ['', Validators.required],
//       language: [[], Validators.required],
//       languagePreference: [[], Validators.required],
//       interests: [[], Validators.required],
//       genderPreference: [[], Validators.required],
//       agePreference: [[], Validators.required],
//       religiosityPreference: [[], Validators.required],
//       wardPreference: [[], Validators.required]
//     });
//   }

//   loadEnums(): void {
//     // נשתמש ב-forkJoin כדי לחכות שכל הנתונים ייטענו
//     forkJoin({
//       genders: this.enumService.getGenders(),
//       languages: this.enumService.getLanguages(),
//       interests: this.enumService.getInterests(),
//       ageGroups: this.enumService.getAgeGroups(),
//       areas: this.enumService.getAreas(),
//       cities: this.enumService.getCities(),
//       religiosities: this.enumService.getReligiosities(),
//       wards: this.enumService.getWards()
//     }).subscribe({
//       next: (data) => {
//         this.genders = data.genders;
//         this.languages = data.languages;
//         this.interests = data.interests;
//         this.ageGroups = data.ageGroups;
//         this.areas = data.areas;
//         this.cities = data.cities;
//         this.religiosities = data.religiosities;
//         this.wards = data.wards;
//         this.isFormReady = true; // הטופס מוכן להצגה רק אחרי שכל הנתונים נטענו
//       },
//       error: (err) => {
//         console.error('שגיאה בטעינת הנתונים:', err);
//         this.isFormReady = false; // במקרה של שגיאה, לא נציג את הטופס
//       }
//     });
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

//   updateCheckboxArray(controlName: string, value: string, event: Event): void {
//     const input = event.target as HTMLInputElement;
//     const checked = input.checked;
//     const control = this.signUpForm.get(controlName);
//     let currentValues: string[] = control?.value || [];
//     if (checked) {
//       if (!currentValues.includes(value)) {
//         currentValues = [...currentValues, value];
//       }
//     } else {
//       currentValues = currentValues.filter(v => v !== value);
//     }
//     control?.setValue(currentValues);
//   }

//   onSubmit(): void {
//     if (this.signUpForm.invalid) {
//       this.signUpForm.markAllAsTouched();
//       console.log('טופס לא תקין:', this.signUpForm.errors);
//       return;
//     }

//     const formValue = this.signUpForm.value;
//     const volunteer: Volunteer = {
//       // id: 0,
//       fullName: formValue.fullName,
//       phone: formValue.phone,
//       birthDate: formValue.birthDate,
//       password: formValue.password,
//       email: formValue.email,
//       extraDetailse: formValue.extraDetailse || '',
//       areaJson: JSON.stringify({ key: formValue.area }),
//       cityJson: JSON.stringify({ key: formValue.city }),
//       genderJson: JSON.stringify({ key: formValue.gender }),
//       availableTimesJson: JSON.stringify(formValue.availableTimes),
//       religiosityJson: JSON.stringify({ key: formValue.religiosity }),
//       languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: l }))),
//       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: l }))),
//       interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: i }))),
//       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: g }))),
//       agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: a }))),
//       religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: r }))),
//       wardPreferenceJson: JSON.stringify(formValue.wardPreference.map((w: string) => ({ key: w })))
//     };
//     console.log('טופס', volunteer);

//     this.volunteerService.addVolunteer(volunteer).subscribe({
//       next: () => {
//         console.log('הרשמה בוצעה בהצלחה');
//         this.signUpForm.reset(); // איפוס הטופס רק לאחר שליחה מוצלחת
//       },
//       error: (err) => {
//         console.error('שגיאה בהרשמה', err);
//       }
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumDataService } from '../../services/enum-data.service';
import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sign-up-volunteer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-volunteer.component.html',
  styleUrls: ['./sign-up-volunteer.component.scss']
})
export class SignUpVolunteerComponent implements OnInit {
  signUpForm!: FormGroup;

  genders: { key: string; value: string }[] = [{ key: '1', value: 'זכר' }, { key: '2', value: 'נקבה' }];
  languages: { key: string; value: string }[] = [{ key: '1', value: 'עברית' }, { key: '2', value: 'אנגלית' }];
  interests: { key: string; value: string }[] = [{ key: '1', value: 'מוזיקה' }, { key: '2', value: 'ספורט' }];
  ageGroups: { key: string; value: string }[] = [{ key: '1', value: '0-18' }, { key: '2', value: '19-30' }];
  areas: { key: string; value: string }[] = [{ key: '1', value: 'צפון' }, { key: '2', value: 'מרכז' }];
  cities: { key: string; value: string }[] = [{ key: '1', value: 'תל אביב' }, { key: '2', value: 'ירושלים' }];
  religiosities: { key: string; value: string }[] = [{ key: '1', value: 'חילוני' }, { key: '2', value: 'דתי' }];
  wards: { key: string; value: string }[] = [{ key: '1', value: 'פנימית' }, { key: '2', value: 'כירורגיה' }];

  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService,
    private volunteerService: VolunteerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadEnums();
  }

  // וולידציה מותאמת אישית לסיסמה
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null; // נדרש נבדק בנפרד

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasSpecial = /[!@#$%^&*]/.test(value);
      const minLength = value.length >= 8;

      const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && minLength;
      return valid ? null : { passwordStrength: true };
    };
  }

  // וולידציה מותאמת אישית לטלפון
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null; // נדרש נבדק בנפרד

      const phonePattern = /^0(5[0-9]|3|7[0-9])[0-9]{7}$/; // 05X או 07X ואחריו 7 ספרות
      return phonePattern.test(value) ? null : { phoneFormat: true };
    };
  }

  initializeForm(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator()]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator()]],
      birthDate: ['', Validators.required],
      extraDetailse: [''],
      area: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      availableTimes: this.fb.array([]),
      religiosity: ['', Validators.required],
      language: [[], Validators.required],
      languagePreference: [[], Validators.required],
      interests: [[], Validators.required],
      genderPreference: [[], Validators.required],
      agePreference: [[], Validators.required],
      religiosityPreference: [[], Validators.required],
      wardPreference: [[], Validators.required]
    });
  }

  loadEnums(): void {
    forkJoin({
      genders: this.enumService.getGenders(),
      languages: this.enumService.getLanguages(),
      interests: this.enumService.getInterests(),
      ageGroups: this.enumService.getAgeGroups(),
      areas: this.enumService.getAreas(),
      cities: this.enumService.getCities(),
      religiosities: this.enumService.getReligiosities(),
      wards: this.enumService.getWards()
    }).subscribe({
      next: (data) => {
        this.genders = data.genders.length ? data.genders : this.genders;
        this.languages = data.languages.length ? data.languages : this.languages;
        this.interests = data.interests.length ? data.interests : this.interests;
        this.ageGroups = data.ageGroups.length ? data.ageGroups : this.ageGroups;
        this.areas = data.areas.length ? data.areas : this.areas;
        this.cities = data.cities.length ? data.cities : this.cities;
        this.religiosities = data.religiosities.length ? data.religiosities : this.religiosities;
        this.wards = data.wards.length ? data.wards : this.wards;
        console.log('נתונים נטענו בהצלחה מה-API');
      },
      error: (err) => {
        console.error('שגיאה בטעינת הנתונים מה-API, משתמש בערכי ברירת מחדל:', err);
      }
    });
  }

  get availableTimes(): FormArray {
    return this.signUpForm.get('availableTimes') as FormArray;
  }

  addAvailableTime(): void {
    this.availableTimes.push(
      this.fb.group({
        day: ['', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required]
      })
    );
  }

  removeAvailableTime(index: number): void {
    this.availableTimes.removeAt(index);
  }

  updateCheckboxArray(controlName: string, value: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    const control = this.signUpForm.get(controlName);
    let currentValues: string[] = control?.value || [];
    if (checked) {
      if (!currentValues.includes(value)) {
        currentValues = [...currentValues, value];
      }
    } else {
      currentValues = currentValues.filter(v => v !== value);
    }
    control?.setValue(currentValues);
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      console.log('טופס לא תקין:', this.signUpForm.errors);
      return;
    }

    const formValue = this.signUpForm.value;
    const volunteer: Volunteer = {
      fullName: formValue.fullName,
      phone: formValue.phone,
      birthDate: formValue.birthDate,
      password: formValue.password,
      email: formValue.email,
      extraDetailse: formValue.extraDetailse || '',
      areaJson: JSON.stringify({ key: formValue.area }),
      cityJson: JSON.stringify({ key: formValue.city }),
      genderJson: JSON.stringify({ key: formValue.gender }),
      availableTimesJson: JSON.stringify(formValue.availableTimes),
      religiosityJson: JSON.stringify({ key: formValue.religiosity }),
      languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: l }))),
      languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: l }))),
      interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: i }))),
      genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: g }))),
      agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: a }))),
      religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: r }))),
      wardPreferenceJson: JSON.stringify(formValue.wardPreference.map((w: string) => ({ key: w })))
    };
    console.log('טופס', volunteer);

    this.volunteerService.addVolunteer(volunteer).subscribe({
      next: () => {
        console.log('הרשמה בוצעה בהצלחה');
        this.signUpForm.reset();
      },
      error: (err) => {
        console.error('שגיאה בהרשמה', err);
      }
    });
  }
}