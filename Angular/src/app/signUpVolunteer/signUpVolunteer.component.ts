// 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // נדרש עבור *ngFor
import { ReactiveFormsModule } from '@angular/forms'; // נדרש עבור Reactive Forms
import { EnumDataService } from '../../services/enum-data.service';

@Component({
  selector: 'app-sign-up-volunteer',
  standalone: true, // קומפוננטה עצמאית
  imports: [CommonModule, ReactiveFormsModule], // ייבוא המודולים הנדרשים
  templateUrl: './sign-up-volunteer.component.html',
  styleUrls: ['./sign-up-volunteer.component.css']
})
export class SignUpVolunteerComponent implements OnInit {
  signUpForm!: FormGroup;

  genders: any[] = [];
  languages: any[] = [];
  interests: any[] = [];
  ageGroups: any[] = [];
  areas: any[] = [];
  cities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private enumService: EnumDataService
  ) {}

  ngOnInit(): void {
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
      availableTimes: this.fb.array([]),
      language: [[], Validators.required], // שפות שהמתנדב דובר
      languagePreference: [[], Validators.required], // העדפת שפות של המטופל
      interests: [[], Validators.required], // תחומי עניין של המתנדב
      genderPreference: [[], Validators.required], // העדפת מגדר של המטופל
      agePreference: ['', Validators.required],
      religiosityPreference: ['', Validators.required],
      wardPreference: ['', Validators.required]
    });

    this.loadEnums();
  }

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
        day: ['', Validators.required],
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
      this.signUpForm.markAllAsTouched(); // סמן את כל השדות כ"נגועים" להצגת שגיאות ב-UI
      return;
    }
    console.log('טופס תקין:', this.signUpForm.value);
    // כאן תוכל לשלוח את הנתונים לשרת, לדוגמה:
    // this.someService.submitForm(this.signUpForm.value).subscribe();
  }
}