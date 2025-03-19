import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// ממשק עבור Time (מותאם למבנה החדש)
export interface Time {
  id: number; // שדה חדש
  day: number; // שינוי מ-string ל-number
  startTime: string; // לדוגמה: "08:00"
  endTime: string; // לדוגמה: "12:00"
}

// ממשק עבור Patient (מותאם למבנה החדש)
export interface Patient {
  // id: number; // שדה חדש
  fullName: string;
  phone: string;
  birthDate: string; // תאריך בפורמט ISO (למשל "1990-01-01")
  password: string;
  email: string;
  extraDetailse?: string; // אופציונלי
  areaJson: string; // JSON string של Area
  area: number; // שדה מפורק חדש
  cityJson: string; // JSON string של City
  city: number; // שדה מפורק חדש
  genderJson: string; // JSON string של Gender
  gender: number; // שדה מפורק חדש
  requiredTimesJson: string; // JSON string של Time[]
  requiredTimes: Time[]; // מערך מפורק חדש
  religiosityJson: string; // JSON string של Religiosity
  religiosity: number; // שדה מפורק חדש
  languageJson: string; // JSON string של Language[]
  language: number[]; // מערך מפורק חדש
  languagePreferenceJson: string; // JSON string של Language[]
  languagePreference: number[]; // מערך מפורק חדש
  interestsJson: string; // JSON string של Interests[]
  interests: number[]; // מערך מפורק חדש
  genderPreferenceJson: string; // JSON string של Gender[]
  genderPreference: number[]; // מערך מפורק חדש
  agePreferenceJson: string; // JSON string של AgeGroup[]
  agePreference: number[]; // מערך מפורק חדש
  religiosityPreferenceJson: string; // JSON string של Religiosity[]
  religiosityPreference: number[]; // מערך מפורק חדש
  wardJson: string; // JSON string של Ward[]
  ward: number; // מערך מפורק חדש
  hospitallJson: string; // JSON string של Ward[]
  hospitall: number; // מערך מפורק חדש
  ageGroup: number; // שדה חדש
}
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7100/api/Patient';

  constructor(private http: HttpClient) {}
  // טיפול בשגיאות
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
  }

  getMePatient(): Observable<any> {
    const token = localStorage.getItem('token'); // או מאיפה שאת שומרת את הטוקן
    console.log('token:', token); // תוודאי שהוא קיים ונראה תקין
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/me`, { headers });
  }
  // הוספת חולה חדש (מערך של Patient)
  addPatient(patient: Patient): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    console.log('מתנדבים שנשלחים לשרת:', patient);
    console.log('JSON שנשלח:', JSON.stringify(patient, null, 2));
  
    return this.http.post<void>(this.apiUrl, patient, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deletePatient(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/patient/me`, { headers });
  }
}
