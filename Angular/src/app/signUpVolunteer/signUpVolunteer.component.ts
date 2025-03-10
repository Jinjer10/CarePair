import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { EnumDataService } from '../../services/enum-data.service'; // שירות לקבלת הנתונים
@Component({
  selector: 'app-sign-up-volunteer',
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
      availableTimes: this.fb.array([]), // FormArray עבור זמני זמינות
      language: [[], Validators.required],
      languagePreference: [[], Validators.required],
      interests: [[], Validators.required],
      genderPreference: [[], Validators.required],
      agePreference: ['', Validators.required],
      religiosityPreference: ['', Validators.required],
      wardPreference: ['', Validators.required],
    });

    this.loadEnums();
  }

  loadEnums(): void {
    // קריאה לשירות שמחזיר את הערכים עבור המגדרים, שפות, תחומי עניין וכו'
    this.enumService.getGenders().subscribe(data => this.genders = data);
    this.enumService.getLanguages().subscribe(data => this.languages = data);
    this.enumService.getInterests().subscribe(data => this.interests = data);
    this.enumService.getAgeGroups().subscribe(data => this.ageGroups = data);
    this.enumService.getAreas().subscribe(data => this.areas = data);  // אם יש צורך בשדות נוספים
    this.enumService.getCities().subscribe(data => this.cities = data); // אם יש צורך בשדות נוספים
  }

  get availableTimes(): FormArray {
    return this.signUpForm.get('availableTimes') as FormArray;
  }

  addAvailableTime() {
    this.availableTimes.push(
      this.fb.group({
        day: ['', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required]
      })
    );
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);
    // כאן יש לשלוח את הנתונים לשרת
  }
}
