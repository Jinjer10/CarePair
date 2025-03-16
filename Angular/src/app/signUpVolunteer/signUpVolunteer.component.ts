
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
  religiosities: { key: string; value: string }[] = [];
  wards: { key: string; value: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService,
    private volunteerService: VolunteerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadEnums();
  }

  initializeForm(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      extraDetailse: [''], // שם תואם למחלקה
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
    this.enumService.getGenders().subscribe(data => this.genders = data);
    this.enumService.getLanguages().subscribe(data => this.languages = data);
    this.enumService.getInterests().subscribe(data => this.interests = data);
    this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
    this.enumService.getAreas().subscribe(data => this.areas = data);
    this.enumService.getCities().subscribe(data => this.cities = data);
    this.enumService.getReligiosities().subscribe(data => this.religiosities = data); // הוספתי
    this.enumService.getWards().subscribe(data => this.wards = data); // הוספתי
  }

  get availableTimes(): FormArray {
    return this.signUpForm.get('availableTimes') as FormArray;
  }

  addAvailableTime(): void {
    this.availableTimes.push(
      this.fb.group({
        day: ['', Validators.required], // הוספתי שדה יום
        startTime: ['', Validators.required],
        endTime: ['', Validators.required]
      })
    );
  }

  removeAvailableTime(index: number): void {
    this.availableTimes.removeAt(index);
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      console.log('טופס לא תקין:', this.signUpForm.errors);
      return;
    }

    const formValue = this.signUpForm.value;
    const volunteer: Volunteer = {
      id: 0, // השרת יקבע את ה-ID
      fullName: formValue.fullName,
      phone: formValue.phone,
      birthDate: formValue.birthDate, // נשלח כ-ISO string
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
    };console.log('טופס',volunteer );

    this.volunteerService.addVolunteer(volunteer).subscribe({
      
      next: () => {
        console.log('הרשמה בוצעה בהצלחה');
        this.signUpForm.reset(); // איפוס הטופס לאחר הצלחה
      },
      error: (err) => {
        console.error('שגיאה בהרשמה', err);
      }
    });
  }
}