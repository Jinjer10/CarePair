
// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { ReactiveFormsModule } from '@angular/forms';
// // import { EnumDataService, EnumItem } from '../../services/enum-data.service';
// // import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
// // import { forkJoin } from 'rxjs';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-update-volunteer',
// //   standalone: true,
// //   imports: [CommonModule, ReactiveFormsModule],
// //   templateUrl: './update-volunteer.component.html',
// //   styleUrls: ['./update-volunteer.component.scss']
// // })
// // export class UpdateVolunteerComponent implements OnInit {
// //   updateForm!: FormGroup;
// //   genders: EnumItem[] = [];
// //   languages: EnumItem[] = [];
// //   interests: EnumItem[] = [];
// //   ageGroups: EnumItem[] = [];
// //   areas: EnumItem[] = [];
// //   cities: EnumItem[] = [];
// //   religiosities: EnumItem[] = [];
// //   wards: EnumItem[] = [];
// //   errorMessage: string = '';

// //   constructor(
// //     private fb: FormBuilder,
// //     private enumService: EnumDataService,
// //     private volunteerService: VolunteerService,
// //     private router: Router
// //   ) {}

// //   ngOnInit(): void {
// //     this.initializeForm();
// //     this.loadEnums();

// //     // טעינת נתוני המתנדב הקיימים
// //     this.volunteerService.getMeVolunteer().subscribe({
// //       next: (data) => {
// //         this.patchFormWithData(data);
// //       },
// //       error: (err) => {
// //         console.error('שגיאה בטעינת נתוני מתנדב:', err);
// //         this.errorMessage = 'שגיאה בטעינת הנתונים';
// //       }
// //     });
// //   }

// //   passwordValidator(): ValidatorFn {
// //     return (control: AbstractControl): { [key: string]: any } | null => {
// //       const value = control.value;
// //       if (!value) return null; // סיסמה אופציונלית בעדכון

// //       const hasUpperCase = /[A-Z]/.test(value);
// //       const hasLowerCase = /[a-z]/.test(value);
// //       const hasNumeric = /[0-9]/.test(value);
// //       const minLength = value.length >= 8;

// //       const valid = hasUpperCase && hasLowerCase && hasNumeric && minLength;
// //       return valid ? null : { passwordStrength: true };
// //     };
// //   }

// //   phoneValidator(): ValidatorFn {
// //     return (control: AbstractControl): { [key: string]: any } | null => {
// //       const value = control.value;
// //       if (!value) return null;

// //       const phonePattern = /^0(5[0-9]|3|7[0-9])[0-9]{7}$/;
// //       return phonePattern.test(value) ? null : { phoneFormat: true };
// //     };
// //   }

// //   initializeForm(): void {
// //     this.updateForm = this.fb.group({
// //       fullName: ['', Validators.required],
// //       password: ['', this.passwordValidator()], // אופציונלי בעדכון
// //       phone: ['', [Validators.required, this.phoneValidator()]],
// //       birthDate: ['', Validators.required],
// //       extraDetailse: [''],
// //       area: ['', Validators.required],
// //       city: ['', Validators.required],
// //       gender: ['', Validators.required],
// //       availableTimes: this.fb.array([]),
// //       religiosity: ['', Validators.required],
// //       language: [[], Validators.required],
// //       languagePreference: [[], Validators.required],
// //       interests: [[], Validators.required],
// //       genderPreference: [[], Validators.required],
// //       agePreference: [[], Validators.required],
// //       religiosityPreference: [[], Validators.required],
// //       wardPreference: [[], Validators.required]
// //     });
// //   }

// //   loadEnums(): void {
// //     forkJoin({
// //       genders: this.enumService.getGenders(),
// //       languages: this.enumService.getLanguages(),
// //       interests: this.enumService.getInterests(),
// //       ageGroups: this.enumService.getAgeGroups(),
// //       areas: this.enumService.getAreas(),
// //       cities: this.enumService.getCities(),
// //       religiosities: this.enumService.getReligiosities(),
// //       wards: this.enumService.getWards()
// //     }).subscribe({
// //       next: (data) => {
// //         this.genders = data.genders.length ? data.genders : this.genders;
// //         this.languages = data.languages.length ? data.languages : this.languages;
// //         this.interests = data.interests.length ? data.interests : this.interests;
// //         this.ageGroups = data.ageGroups.length ? data.ageGroups : this.ageGroups;
// //         this.areas = data.areas.length ? data.areas : this.areas;
// //         this.cities = data.cities.length ? data.cities : this.cities;
// //         this.religiosities = data.religiosities.length ? data.religiosities : this.religiosities;
// //         this.wards = data.wards.length ? data.wards : this.wards;
// //         console.log('נתונים נטענו בהצלחה מה-API');
// //       },
// //       error: (err) => {
// //         console.error('שגיאה בטעינת הנתונים מה-API:', err);
// //       }
// //     });
// //   }

// //   get availableTimes(): FormArray {
// //     return this.updateForm.get('availableTimes') as FormArray;
// //   }

// //   addAvailableTime(time?: Time): void {
// //     const timeGroup = this.fb.group({
// //       day: [time?.day?.toString() || '', Validators.required],
// //       startTime: [time?.startTime || '', Validators.required],
// //       endTime: [time?.endTime || '', Validators.required]
// //     });
// //     this.availableTimes.push(timeGroup);
// //   }

// //   removeAvailableTime(index: number): void {
// //     this.availableTimes.removeAt(index);
// //   }

// //   updateCheckboxArray(controlName: string, value: string, event: Event): void {
// //     const input = event.target as HTMLInputElement;
// //     const checked = input.checked;
// //     const control = this.updateForm.get(controlName);
// //     let currentValues: string[] = control?.value || [];
// //     if (checked) {
// //       if (!currentValues.includes(value)) {
// //         currentValues = [...currentValues, value];
// //       }
// //     } else {
// //       currentValues = currentValues.filter(v => v !== value);
// //     }
// //     control?.setValue(currentValues);
// //   }

// //   patchFormWithData(data: Volunteer): void {
// //     // טעינת הנתונים לטופס בצורה מדויקת
// //     this.updateForm.patchValue({
// //       fullName: data.fullName || '',
// //       phone: data.phone || '',
// //       birthDate: data.birthDate ? new Date(data.birthDate).toISOString().split('T')[0] : '',
// //       extraDetailse: data.extraDetailse || '',
// //       area: data.area?.toString() || '',
// //       city: data.city?.toString() || '',
// //       gender: data.gender?.toString() || '',
// //       religiosity: data.religiosity?.toString() || '',
// //       language: data.language ? data.language.map(l => l.toString()) : [],
// //       languagePreference: data.languagePreference ? data.languagePreference.map(l => l.toString()) : [],
// //       interests: data.interests ? data.interests.map(i => i.toString()) : [],
// //       genderPreference: data.genderPreference ? data.genderPreference.map(g => g.toString()) : [],
// //       agePreference: data.agePreference ? data.agePreference.map(a => a.toString()) : [],
// //       religiosityPreference: data.religiosityPreference ? data.religiosityPreference.map(r => r.toString()) : [],
// //       wardPreference: data.wardPreference ? data.wardPreference.map(w => w.toString()) : []
// //     });

// //     // טעינת זמני זמינות קיימים
// //     this.availableTimes.clear();
// //     if (data.availableTimes && data.availableTimes.length > 0) {
// //       data.availableTimes.forEach((time: Time) => {
// //         this.addAvailableTime(time);
// //       });
// //     } else {
// //       this.addAvailableTime(); // הוספת זמן זמינות ריק אם אין קיימים
// //     }

// //     console.log('נתונים נטענו לטופס:', this.updateForm.value);
// //   }

// //   onSubmit(): void {
// //     if (this.updateForm.invalid) {
// //       this.updateForm.markAllAsTouched();
// //       this.errorMessage = 'אנא מלא את כל השדות הנדרשים בצורה תקינה';
// //       console.log('טופס לא תקין:', this.updateForm.errors);
// //       return;
// //     }

// //     const formValue = this.updateForm.value;
// //     const volunteer: Volunteer = {
// //       fullName: formValue.fullName,
// //       phone: formValue.phone,
// //       birthDate: formValue.birthDate,
// //       password: formValue.password || undefined, // שליחה רק אם שונה
// //       email: '', // לא נשלח בעדכון
// //       extraDetailse: formValue.extraDetailse || '',
// //       areaJson: JSON.stringify({ key: this.findEnumKey(this.areas, formValue.area) }),
// //       area: parseInt(formValue.area, 10),
// //       cityJson: JSON.stringify({ key: this.findEnumKey(this.cities, formValue.city) }),
// //       city: parseInt(formValue.city, 10),
// //       genderJson: JSON.stringify({ key: this.findEnumKey(this.genders, formValue.gender) }),
// //       gender: parseInt(formValue.gender, 10),
// //       availableTimesJson: JSON.stringify(formValue.availableTimes),
// //       availableTimes: formValue.availableTimes.map((time: any, index: number) => ({
// //         id: index,
// //         day: parseInt(time.day, 10),
// //         startTime: time.startTime,
// //         endTime: time.endTime
// //       })),
// //       religiosityJson: JSON.stringify({ key: this.findEnumKey(this.religiosities, formValue.religiosity) }),
// //       religiosity: parseInt(formValue.religiosity, 10),
// //       languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: this.findEnumKey(this.languages, l) }))),
// //       language: formValue.language.map((l: string) => parseInt(l, 10)),
// //       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: this.findEnumKey(this.languages, l) }))),
// //       languagePreference: formValue.languagePreference.map((l: string) => parseInt(l, 10)),
// //       interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: this.findEnumKey(this.interests, i) }))),
// //       interests: formValue.interests.map((i: string) => parseInt(i, 10)),
// //       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: this.findEnumKey(this.genders, g) }))),
// //       genderPreference: formValue.genderPreference.map((g: string) => parseInt(g, 10)),
// //       agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: this.findEnumKey(this.ageGroups, a) }))),
// //       agePreference: formValue.agePreference.map((a: string) => parseInt(a, 10)),
// //       religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: this.findEnumKey(this.religiosities, r) }))),
// //       religiosityPreference: formValue.religiosityPreference.map((r: string) => parseInt(r, 10)),
// //       wardPreferenceJson: JSON.stringify(formValue.wardPreference.map((w: string) => ({ key: this.findEnumKey(this.wards, w) }))),
// //       wardPreference: formValue.wardPreference.map((w: string) => parseInt(w, 10)),
// //       ageGroup: 0 // יש לעדכן אם נדרש
// //     };

// //     this.volunteerService.updateVolunteer(volunteer).subscribe({
// //       next: () => {
// //         console.log('עדכון בוצע בהצלחה');
// //         this.router.navigate(['/personal-area']);
// //       },
// //       error: (err) => {
// //         console.error('שגיאה בעדכון:', err);
// //         this.errorMessage = err.error?.message || 'שגיאה בעדכון הפרטים';
// //       }
// //     });
// //   }

// //   cancel(): void {
// //     this.router.navigate(['/personal-area']);
// //   }

// //   private findEnumKey(enumList: EnumItem[], id: string): string {
// //     const item = enumList.find(e => e.id === parseInt(id, 10));
// //     return item ? item.key : '';
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { EnumDataService, EnumItem } from '../../services/enum-data.service';
// import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
// import { forkJoin } from 'rxjs';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-update-volunteer',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './update-volunteer.component.html',
//   styleUrls: ['./update-volunteer.component.scss']
// })
// export class UpdateVolunteerComponent implements OnInit {
//   updateForm!: FormGroup;
//   genders: EnumItem[] = [];
//   languages: EnumItem[] = [];
//   interests: EnumItem[] = [];
//   ageGroups: EnumItem[] = [];
//   areas: EnumItem[] = [];
//   cities: EnumItem[] = [];
//   religiosities: EnumItem[] = [];
//   wards: EnumItem[] = [];
//   errorMessage: string = '';
//   isLoading: boolean = true;

//   constructor(
//     private fb: FormBuilder,
//     private enumService: EnumDataService,
//     private volunteerService: VolunteerService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.initializeForm();
//     this.loadEnumsAndData();
//   }

//   passwordValidator(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => {
//       const value = control.value;
//       if (!value) return null;

//       const hasUpperCase = /[A-Z]/.test(value);
//       const hasLowerCase = /[a-z]/.test(value);
//       const hasNumeric = /[0-9]/.test(value);
//       const minLength = value.length >= 8;

//       const valid = hasUpperCase && hasLowerCase && hasNumeric && minLength;
//       return valid ? null : { passwordStrength: true };
//     };
//   }

//   phoneValidator(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => {
//       const value = control.value;
//       if (!value) return null;

//       const phonePattern = /^0(5[0-9]|3|7[0-9])[0-9]{7}$/;
//       return phonePattern.test(value) ? null : { phoneFormat: true };
//     };
//   }

//   initializeForm(): void {
//     this.updateForm = this.fb.group({
//       fullName: ['', Validators.required],
//       password: ['', this.passwordValidator()],
//       phone: ['', [Validators.required, this.phoneValidator()]],
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

//   loadEnumsAndData(): void {
//     forkJoin({
//       genders: this.enumService.getGenders(),
//       languages: this.enumService.getLanguages(),
//       interests: this.enumService.getInterests(),
//       ageGroups: this.enumService.getAgeGroups(),
//       areas: this.enumService.getAreas(),
//       cities: this.enumService.getCities(),
//       religiosities: this.enumService.getReligiosities(),
//       wards: this.enumService.getWards(),
//       volunteer: this.volunteerService.getMeVolunteer()
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

//         this.patchFormWithData(data.volunteer);
//         this.isLoading = false;
//         console.log('נתונים נטענו לטופס:', this.updateForm.value);
//       },
//       error: (err) => {
//         console.error('שגיאה בטעינת הנתונים:', err);
//         this.errorMessage = 'שגיאה בטעינת הנתונים';
//         this.isLoading = false;
//       }
//     });
//   }

//   get availableTimes(): FormArray {
//     return this.updateForm.get('availableTimes') as FormArray;
//   }

//   addAvailableTime(time?: Time): void {
//     const timeGroup = this.fb.group({
//       day: [time?.day?.toString() || '', Validators.required],
//       startTime: [time?.startTime || '', Validators.required],
//       endTime: [time?.endTime || '', Validators.required]
//     });
//     this.availableTimes.push(timeGroup);
//   }

//   removeAvailableTime(index: number): void {
//     this.availableTimes.removeAt(index);
//   }

//   updateCheckboxArray(controlName: string, value: string, event: Event): void {
//     const input = event.target as HTMLInputElement;
//     const checked = input.checked;
//     const control = this.updateForm.get(controlName);
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

//   patchFormWithData(data: Volunteer): void {
//     this.updateForm.patchValue({
//       fullName: data.fullName || '',
//       phone: data.phone || '',
//       birthDate: data.birthDate ? new Date(data.birthDate).toISOString().split('T')[0] : '',
//       extraDetailse: data.extraDetailse || '',
//       area: this.findEnumId(this.areas, data.area) || '',
//       city: this.findEnumId(this.cities, data.city) || '',
//       gender: this.findEnumId(this.genders, data.gender) || '',
//       religiosity: this.findEnumId(this.religiosities, data.religiosity) || '',
//       language: (data.language || []).map(key => key), // שימוש ישיר ב-key
//       languagePreference: (data.languagePreference || []).map(key => key),
//       interests: (data.interests || []).map(key => key),
//       genderPreference: (data.genderPreference || []).map(key => key),
//       agePreference: (data.agePreference || []).map(key => key),
//       religiosityPreference: (data.religiosityPreference || []).map(key => key),
//       wardPreference: (data.wardPreference || []).map(key => key)
//     });

//     this.availableTimes.clear();
//     if (data.availableTimes && data.availableTimes.length > 0) {
//       data.availableTimes.forEach((time: Time) => this.addAvailableTime(time));
//     } else {
//       this.addAvailableTime();
//     }
//   }

//   onSubmit(): void {
//     if (this.updateForm.invalid) {
//       this.updateForm.markAllAsTouched();
//       this.errorMessage = 'אנא מלא את כל השדות הנדרשים בצורה תקינה';
//       console.log('טופס לא תקין:', this.updateForm.errors);
//       return;
//     }

//     const formValue = this.updateForm.value;
//     const volunteer: Volunteer = {
//       fullName: formValue.fullName,
//       phone: formValue.phone,
//       birthDate: formValue.birthDate,
//       password: formValue.password || undefined,
//       email: '',
//       extraDetailse: formValue.extraDetailse || '',
//       areaJson: JSON.stringify({ key: this.findEnumKey(this.areas, formValue.area.toString()) }), // המרה למחרוזת
//       area: parseInt(formValue.area, 10),
//       cityJson: JSON.stringify({ key: this.findEnumKey(this.cities, formValue.city.toString()) }),
//       city: parseInt(formValue.city, 10),
//       genderJson: JSON.stringify({ key: this.findEnumKey(this.genders, formValue.gender.toString()) }),
//       gender: parseInt(formValue.gender, 10),
//       availableTimesJson: JSON.stringify(formValue.availableTimes),
//       availableTimes: formValue.availableTimes.map((time: any, index: number) => ({
//         id: index,
//         day: parseInt(time.day, 10),
//         startTime: time.startTime,
//         endTime: time.endTime
//       })),
//       religiosityJson: JSON.stringify({ key: this.findEnumKey(this.religiosities, formValue.religiosity.toString()) }),
//       religiosity: parseInt(formValue.religiosity, 10),
//       languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: l }))),
//       language: formValue.language.map((l: string) => this.findEnumId(this.languages, l)), // המרה ל-id
//       languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: l }))),
//       languagePreference: formValue.languagePreference.map((l: string) => this.findEnumId(this.languages, l)),
//       interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: i }))),
//       interests: formValue.interests.map((i: string) => this.findEnumId(this.interests, i)),
//       genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: g }))),
//       genderPreference: formValue.genderPreference.map((g: string) => this.findEnumId(this.genders, g)),
//       agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: a }))),
//       agePreference: formValue.agePreference.map((a: string) => this.findEnumId(this.ageGroups, a)),
//       religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: r }))),
//       religiosityPreference: formValue.religiosityPreference.map((r: string) => this.findEnumId(this.religiosities, r)),
//       wardPreferenceJson: JSON.stringify(formValue.wardPreference.map((w: string) => ({ key: w }))),
//       wardPreference: formValue.wardPreference.map((w: string) => this.findEnumId(this.wards, w)),
//       ageGroup: 0
//     };

//     this.volunteerService.updateVolunteer(volunteer).subscribe({
//       next: () => {
//         console.log('עדכון בוצע בהצלחה');
//         this.router.navigate(['/personal-area']);
//       },
//       error: (err) => {
//         console.error('שגיאה בעדכון:', err);
//         this.errorMessage = err.error?.message || 'שגיאה בעדכון הפרטים';
//       }
//     });
//   }

//   cancel(): void {
//     this.router.navigate(['/personal-area']);
//   }

//   private findEnumId(enumList: EnumItem[], key: string): string {
//     const item = enumList.find(e => e.key === key);
//     return item ? item.id.toString() : '';
//   }

//   private findEnumKey(enumList: EnumItem[], id: string): string {
//     const item = enumList.find(e => e.id === parseInt(id, 10));
//     return item ? item.key : '';
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumDataService, EnumItem } from '../../services/enum-data.service';
import { VolunteerService, Volunteer, Time } from '../../services/volunteer.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-volunteer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-volunteer.component.html',
  styleUrls: ['./update-volunteer.component.scss']
})
export class UpdateVolunteerComponent implements OnInit {
  updateForm!: FormGroup;
  genders: EnumItem[] = [];
  languages: EnumItem[] = [];
  interests: EnumItem[] = [];
  ageGroups: EnumItem[] = [];
  areas: EnumItem[] = [];
  cities: EnumItem[] = [];
  religiosities: EnumItem[] = [];
  wards: EnumItem[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService,
    private volunteerService: VolunteerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadEnumsAndData();
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const minLength = value.length >= 8;

      const valid = hasUpperCase && hasLowerCase && hasNumeric && minLength;
      return valid ? null : { passwordStrength: true };
    };
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;

      const phonePattern = /^0(5[0-9]|3|7[0-9])[0-9]{7}$/;
      return phonePattern.test(value) ? null : { phoneFormat: true };
    };
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', this.passwordValidator()],
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

  loadEnumsAndData(): void {
    forkJoin({
      genders: this.enumService.getGenders(),
      languages: this.enumService.getLanguages(),
      interests: this.enumService.getInterests(),
      ageGroups: this.enumService.getAgeGroups(),
      areas: this.enumService.getAreas(),
      cities: this.enumService.getCities(),
      religiosities: this.enumService.getReligiosities(),
      wards: this.enumService.getWards(),
      volunteer: this.volunteerService.getMeVolunteer()
    }).subscribe({
      next: (data) => {
        this.genders = data.genders;
        this.languages = data.languages;
        this.interests = data.interests;
        this.ageGroups = data.ageGroups;
        this.areas = data.areas;
        this.cities = data.cities;
        this.religiosities = data.religiosities;
        this.wards = data.wards;

        this.patchFormWithData(data.volunteer);
        this.isLoading = false;
        console.log('נתונים נטענו לטופס:', this.updateForm.value);
      },
      error: (err) => {
        console.error('שגיאה בטעינת הנתונים:', err);
        this.errorMessage = 'שגיאה בטעינת הנתונים';
        this.isLoading = false;
      }
    });
  }

  get availableTimes(): FormArray {
    return this.updateForm.get('availableTimes') as FormArray;
  }

  addAvailableTime(time?: Time): void {
    const timeGroup = this.fb.group({
      day: [time?.day?.toString() || '', Validators.required],
      startTime: [time?.startTime || '', Validators.required],
      endTime: [time?.endTime || '', Validators.required]
    });
    this.availableTimes.push(timeGroup);
  }

  removeAvailableTime(index: number): void {
    this.availableTimes.removeAt(index);
  }

  updateCheckboxArray(controlName: string, value: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    const control = this.updateForm.get(controlName);
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

  patchFormWithData(data: Volunteer): void {
    this.updateForm.patchValue({
      fullName: data.fullName || '',
      phone: data.phone || '',
      birthDate: data.birthDate ? new Date(data.birthDate).toISOString().split('T')[0] : '',
      extraDetailse: data.extraDetailse || '',
      area: this.findEnumId(this.areas, data.area.toString()) || '',
      city: this.findEnumId(this.cities, data.city.toString()) || '',
      gender: this.findEnumId(this.genders, data.gender.toString()) || '',
      religiosity: this.findEnumId(this.religiosities, data.religiosity.toString()) || '',
    //   language: (data.language || []).map(key => key),
    //   languagePreference: (data.languagePreference || []).map(key => key),
    //   interests: (data.interests || []).map(key => key),
    //   genderPreference: (data.genderPreference || []).map(key => key),
    //   agePreference: (data.agePreference || []).map(key => key),
    //   religiosityPreference: (data.religiosityPreference || []).map(key => key),
    //   wardPreference: (data.wardPreference || []).map(key => key)
    //

    // המרת ערכים מספריים ל-keys עבור מערכים
    language: (data.language || []).map(id => this.findEnumKey(this.languages, id.toString())),
    languagePreference: (data.languagePreference || []).map(id => this.findEnumKey(this.languages, id.toString())),
    interests: (data.interests || []).map(id => this.findEnumKey(this.interests, id.toString())),
    genderPreference: (data.genderPreference || []).map(id => this.findEnumKey(this.genders, id.toString())),
    agePreference: (data.agePreference || []).map(id => this.findEnumKey(this.ageGroups, id.toString())),
    religiosityPreference: (data.religiosityPreference || []).map(id => this.findEnumKey(this.religiosities, id.toString())),
    wardPreference: (data.wardPreference || []).map(id => this.findEnumKey(this.wards, id.toString()))
  
     });

    this.availableTimes.clear();
    if (data.availableTimes && data.availableTimes.length > 0) {
      data.availableTimes.forEach((time: Time) => this.addAvailableTime(time));
    } else {
      this.addAvailableTime();
    }
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      this.errorMessage = 'אנא מלא את כל השדות הנדרשים בצורה תקינה';
      console.log('טופס לא תקין:', this.updateForm.errors);
      return;
    }

    const formValue = this.updateForm.value;
    const volunteer: Volunteer = {
      fullName: formValue.fullName,
      phone: formValue.phone,
      birthDate: formValue.birthDate,
      password: formValue.password || undefined,
      email: '',
      extraDetailse: formValue.extraDetailse || '',
      areaJson: JSON.stringify({ key: this.findEnumKey(this.areas, String(formValue.area)) }),
      area: parseInt(formValue.area, 10),
      cityJson: JSON.stringify({ key: this.findEnumKey(this.cities, String(formValue.city)) }),
      city: parseInt(formValue.city, 10),
      genderJson: JSON.stringify({ key: this.findEnumKey(this.genders, String(formValue.gender)) }),
      gender: parseInt(formValue.gender, 10),
      availableTimesJson: JSON.stringify(formValue.availableTimes),
      availableTimes: formValue.availableTimes.map((time: any, index: number) => ({
        id: index,
        day: parseInt(time.day, 10),
        startTime: time.startTime,
        endTime: time.endTime
      })),
      religiosityJson: JSON.stringify({ key: this.findEnumKey(this.religiosities, String(formValue.religiosity)) }),
      religiosity: parseInt(formValue.religiosity, 10), // שמירה כ-number עבור המודל
      languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: l }))),
      language: formValue.language.map((l: string) => parseInt(this.findEnumId(this.languages, l), 10)),
      languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: l }))),
      languagePreference: formValue.languagePreference.map((l: string) => parseInt(this.findEnumId(this.languages, l), 10)),
      interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: i }))),
      interests: formValue.interests.map((i: string) => parseInt(this.findEnumId(this.interests, i), 10)),
      genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: g }))),
      genderPreference: formValue.genderPreference.map((g: string) => parseInt(this.findEnumId(this.genders, g), 10)),
      agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: a }))),
      agePreference: formValue.agePreference.map((a: string) => parseInt(this.findEnumId(this.ageGroups, a), 10)),
      religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: r }))),
      religiosityPreference: formValue.religiosityPreference.map((r: string) => parseInt(this.findEnumId(this.religiosities, r), 10)),
      wardPreferenceJson: JSON.stringify(formValue.wardPreference.map((w: string) => ({ key: w }))),
      wardPreference: formValue.wardPreference.map((w: string) => parseInt(this.findEnumId(this.wards, w), 10)),
      ageGroup: 0
    };

    this.volunteerService.updateVolunteer(volunteer).subscribe({
      next: () => {
        console.log('עדכון בוצע בהצלחה');
        this.router.navigate(['/personal-area']);
      },
      error: (err) => {
        console.error('שגיאה בעדכון:', err);
        this.errorMessage = err.error?.message || 'שגיאה בעדכון הפרטים';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/personal-area']);
  }

  private findEnumId(enumList: EnumItem[], key: string): string {
    const item = enumList.find(e => e.key === key);
    return item ? item.id.toString() : '';
  }

  private findEnumKey(enumList: EnumItem[], id: string): string {
    const item = enumList.find(e => e.id === parseInt(id, 10));
    return item ? item.key : '';
  }
}