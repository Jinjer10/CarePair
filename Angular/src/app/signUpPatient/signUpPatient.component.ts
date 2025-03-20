import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumDataService, EnumItem } from '../../services/enum-data.service';
import { PatientService, Patient, Time } from '../../services/patient.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';  // הוספת Router
import { SignInService } from '../../services/sign-in.service'; // הוספת SignInService

@Component({
  standalone: true,
  selector: 'app-signUpPatient',
  templateUrl: './signUpPatient.component.html',
  styleUrls: ['./signUpPatient.component.scss'],
  imports: [RouterModule, ReactiveFormsModule, NgIf, NgForOf],  // ← חובה בשביל routerLink
})
export class SignUpPatientComponent implements OnInit {
  signUpForm!: FormGroup;
  // הגדרת המשתנים כריקים בתחילה - ייתמלאו מהשרת
  genders: EnumItem[] = [];
  languages: EnumItem[] = [];
  interests: EnumItem[] = [];
  ageGroups: EnumItem[] = [];
  areas: EnumItem[] = [];
  cities: EnumItem[] = [];
  religiosities: EnumItem[] = [];
  wards: EnumItem[] = [];
  hospitalls: EnumItem[] = [];
  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService,
    private patientService: PatientService,
    private router: Router, // הזרקת Router
    private authService: SignInService // הוספת SignInService לקונסטרקטור
  ) { }
  private email = ''; // שדות לאחסון אימייל וסיסמה
  private password = '';

  ngOnInit(): void {
    this.initializeForm();
    this.loadEnums();
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


  // וולידציה מותאמת אישית לטלפון
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;

      const phonePattern = /^0(5[0-9]|3|7[0-9])[0-9]{7}$/;
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
       ward: [null, Validators.required],
      hospitall: [null, Validators.required],
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
      ward: this.enumService.getWards(),
      hospitall: this.enumService.getHospitalls()
    }).subscribe({
      next: (data) => {
        this.genders = data.genders.length ? data.genders : this.genders;
        this.languages = data.languages.length ? data.languages : this.languages;
        this.interests = data.interests.length ? data.interests : this.interests;
        this.ageGroups = data.ageGroups.length ? data.ageGroups : this.ageGroups;
        this.areas = data.areas.length ? data.areas : this.areas;
        this.cities = data.cities.length ? data.cities : this.cities;
        this.religiosities = data.religiosities.length ? data.religiosities : this.religiosities;
        // this.ward = data.ward.length ? data.wards : this.ward;//===========================
        this.wards = data.ward ? data.ward : this.wards;
        // this.hospitall = data.hospitall.length ? data.hospitall : this.hospitall;//===========================
        this.hospitalls = data.hospitall ? data.hospitall : this.hospitalls;

        console.log('נתונים נטענו בהצלחה מה-API==============================');
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
    console.log("this.signUpForm.value", this.signUpForm.value)
    const formValue = this.signUpForm.value;
    this.email = formValue.email; // שמירת אימייל וסיסמה
    this.password = formValue.password;
    const patient: Patient = {
      fullName: formValue.fullName,
      phone: formValue.phone,
      birthDate: formValue.birthDate,
      password: formValue.password,
      email: formValue.email,
      extraDetailse: formValue.extraDetailse || '',
      areaJson: JSON.stringify({ key: this.findEnumKey(this.areas, formValue.area) }),
      area: parseInt(formValue.area, 10),
      cityJson: JSON.stringify({ key: this.findEnumKey(this.cities, formValue.city) }),
      city: parseInt(formValue.city, 10),
      genderJson: JSON.stringify({ key: this.findEnumKey(this.genders, formValue.gender) }),
      gender: parseInt(formValue.gender, 10),
      requiredTimesJson: JSON.stringify(formValue.availableTimes),
      requiredTimes: formValue.availableTimes.map((time: any, index: number) => ({
        id: index,
        day: parseInt(time.day, 10),
        startTime: time.startTime,
        endTime: time.endTime
      })),
      religiosityJson: JSON.stringify({ key: this.findEnumKey(this.religiosities, formValue.religiosity) }),
      religiosity: parseInt(formValue.religiosity, 10),
      languageJson: JSON.stringify(formValue.language.map((l: string) => ({ key: this.findEnumKey(this.languages, l) }))),
      language: formValue.language.map((l: string) => parseInt(l, 10)),
      languagePreferenceJson: JSON.stringify(formValue.languagePreference.map((l: string) => ({ key: this.findEnumKey(this.languages, l) }))),
      languagePreference: formValue.languagePreference.map((l: string) => parseInt(l, 10)),
      interestsJson: JSON.stringify(formValue.interests.map((i: string) => ({ key: this.findEnumKey(this.interests, i) }))),
      interests: formValue.interests.map((i: string) => parseInt(i, 10)),
      genderPreferenceJson: JSON.stringify(formValue.genderPreference.map((g: string) => ({ key: this.findEnumKey(this.genders, g) }))),
      genderPreference: formValue.genderPreference.map((g: string) => parseInt(g, 10)),
      agePreferenceJson: JSON.stringify(formValue.agePreference.map((a: string) => ({ key: this.findEnumKey(this.ageGroups, a) }))),
      agePreference: formValue.agePreference.map((a: string) => parseInt(a, 10)),
      religiosityPreferenceJson: JSON.stringify(formValue.religiosityPreference.map((r: string) => ({ key: this.findEnumKey(this.religiosities, r) }))),
      religiosityPreference: formValue.religiosityPreference.map((r: string) => parseInt(r, 10)),
       wardJson: JSON.stringify({ key: this.findEnumKey(this.wards, formValue.ward) }),
      ward: parseInt(formValue.ward, 10),  
      hospitallJson: JSON.stringify({ key: this.findEnumKey(this.hospitalls, formValue.hospitall) }),
      hospitall: parseInt(formValue.hospitall, 10),   
      ageGroup: 0 // יש לעדכן אם נדרש   

    };
      console.log("patient", patient)
    this.patientService.addPatient(patient).subscribe({

      next: () => {
        console.log('הרשמה בוצעה בהצלחה');
        this.authService.login(this.email, this.password).subscribe({ // ביצוע התחברות אוטומטית
          next: () => {
            console.log('התחברות אוטומטית הצליחה');
            this.signUpForm.reset();
            this.router.navigate(['personalArea']);
          },
          error: (err) => {
            console.error('שגיאה בהתחברות אוטומטית', err);
          }
        });
      },
      error: (err) => {
        console.error('שגיאה בהרשמה', err);
      }
    });
  }

  // פונקציה עזר למציאת ה-key לפי id
  private findEnumKey(enumList: EnumItem[], id: string): string {
    const item = enumList.find(e => e.id === parseInt(id, 10));
    return item ? item.key : '';
  }
}