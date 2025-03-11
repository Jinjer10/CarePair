// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// // import { Observable, throwError } from 'rxjs';
// // import { catchError } from 'rxjs/operators';

// // // ממשקים עבור המודלים המשניים (פשוטים כרגע, התאם לפי הצורך)
// // export interface Time {
// //   day: string; // לדוגמה: "1" עבור ראשון
// //   startTime: string; // לדוגמה: "08:00"
// //   endTime: string; // לדוגמה: "12:00"
// // }

// // export interface Area {
// //   key: string; // לדוגמה: "North"
// //   value: string; // לדוגמה: "צפון"
// // }

// // export interface City {
// //   key: string; // לדוגמה: "TelAviv"
// //   value: string; // לדוגמה: "תל אביב"
// // }

// // export interface Gender {
// //   key: string; // לדוגמה: "Male"
// //   value: string; // לדוגמה: "זכר"
// // }

// // export interface Language {
// //   key: string; // לדוגמה: "Hebrew"
// //   value: string; // לדוגמה: "עברית"
// // }

// // export interface Interests {
// //   key: string; // לדוגמה: "Art"
// //   value: string; // לדוגמה: "אמנות"
// // }

// // export interface AgeGroup {
// //   key: string; // לדוגמה: "Children"
// //   value: string; // לדוגמה: "ילדים"
// // }

// // export interface Religiosity {
// //   key: string; // לדוגמה: "1" (דתי)
// //   value: string; // לדוגמה: "דתי"
// // }

// // export interface Ward {
// //   key: string; // לדוגמה: "Cardiology"
// //   value: string; // לדוגמה: "קרדיולוגיה"
// // }

// // // ממשק עבור מודל ה-Volunteer
// // export interface Volunteer {
// //   id: number;
// //   fullName: string;
// //   phone: string;
// //   birthDate: string; // נשלח כ-ISO string (למשל "1990-01-01")
// //   password: string;
// //   email: string;
// //   extraDetailse?: string; // אופציונלי, תואם לטעות כתיב בשרת
// //   areaJson: string; // JSON string של Area
// //   cityJson: string; // JSON string של City
// //   genderJson: string; // JSON string של Gender
// //   availableTimesJson: string; // JSON string של Time[]
// //   religiosityJson: string; // JSON string של Religiosity
// //   languageJson: string; // JSON string של Language[]
// //   languagePreferenceJson: string; // JSON string של Language[]
// //   interestsJson: string; // JSON string של Interests[]
// //   genderPreferenceJson: string; // JSON string של Gender[]
// //   agePreferenceJson: string; // JSON string של AgeGroup[]
// //   religiosityPreferenceJson: string; // JSON string של Religiosity[]
// //   wardPreferenceJson: string; // JSON string של Ward[]
// // }

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class VolunteerService {
// //   private apiUrl = 'https://localhost:7100/api/volunteer'; // התאם לכתובת ה-API שלך

// //   constructor(private http: HttpClient) {}

// //   // טיפול בשגיאות HTTP
// //   private handleError(error: HttpErrorResponse): Observable<never> {
// //     console.error('An error occurred:', error.message);
// //     return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
// //   }

// //   // GET: לרשימת כל המתנדבים
// //   getVolunteers(): Observable<Volunteer[]> {
// //     return this.http.get<Volunteer[]>(this.apiUrl).pipe(
// //       catchError(this.handleError)
// //     );
// //   }

// //   // GET: מתנדב לפי ID
// //   getVolunteerById(id: number): Observable<Volunteer> {
// //     return this.http.get<Volunteer>(`${this.apiUrl}/${id}`).pipe(
// //       catchError(this.handleError)
// //     );
// //   }

// //   // POST: הוספת מתנדב חדש
// //   addVolunteer(volunteer: Volunteer): Observable<void> {
// //     return this.http.post<void>(this.apiUrl, volunteer).pipe(
// //       catchError(this.handleError)
// //     );
// //   }

// //   // PUT: עדכון מתנדב קיים
// //   updateVolunteer(volunteer: Volunteer, id: number): Observable<void> {
// //     return this.http.put<void>(`${this.apiUrl}/${id}`, volunteer).pipe(
// //       catchError(this.handleError)
// //     );
// //   }

// //   // DELETE: מחיקת מתנדב
// //   deleteVolunteer(id: number): Observable<void> {
// //     return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
// //       catchError(this.handleError)
// //     );
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// // ממשקים עבור המודלים המשניים
// export interface Time {
//   day: string; // לדוגמה: "1" (מתאים לטופס שלך, לא enum)
//   startTime: string; // לדוגמה: "08:00"
//   endTime: string; // לדוגמה: "12:00"
// }

// export type Area = keyof typeof Area;
// export type City = keyof typeof City;
// export type Gender = keyof typeof Gender;
// export type Language = keyof typeof Language;
// export type Interests = keyof typeof Interests;
// export type AgeGroup = keyof typeof AgeGroup;
// export type Religiosity = keyof typeof Religiosity;
// export type Ward = keyof typeof Ward;

// // ממשק עבור מודל ה-Volunteer
// export interface Volunteer {
//   id: number;
//   fullName: string;
//   phone: string;
//   birthDate: string; // נשלח כ-ISO string (למשל "1990-01-01")
//   password: string;
//   email: string;
//   extraDetailse?: string; // אופציונלי, תואם לטעות כתיב בשרת
//   areaJson: string; // JSON string של Area (למשל '{"key": "TelAviv"}')
//   cityJson: string; // JSON string של City
//   genderJson: string; // JSON string של Gender
//   availableTimesJson: string; // JSON string של Time[]
//   religiosityJson: string; // JSON string של Religiosity
//   languageJson: string; // JSON string של Language[]
//   languagePreferenceJson: string; // JSON string של Language[]
//   interestsJson: string; // JSON string של Interests[]
//   genderPreferenceJson: string; // JSON string של Gender[]
//   agePreferenceJson: string; // JSON string של AgeGroup[]
//   religiosityPreferenceJson: string; // JSON string של Religiosity[]
//   wardPreferenceJson: string; // JSON string של Ward[]
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class VolunteerService {
//   private apiUrl = 'https://localhost:7100/api/volunteer'; // התאם לכתובת ה-API שלך

//   constructor(private http: HttpClient) {}

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     console.error('An error occurred:', error.message);
//     return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
//   }

//   getVolunteers(): Observable<Volunteer[]> {
//     return this.http.get<Volunteer[]>(this.apiUrl).pipe(
//       catchError(this.handleError)
//     );
//   }

//   getVolunteerById(id: number): Observable<Volunteer> {
//     return this.http.get<Volunteer>(`${this.apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   addVolunteer(volunteer: Volunteer): Observable<void> {
//     return this.http.post<void>(this.apiUrl, volunteer).pipe(
//       catchError(this.handleError)
//     );
//   }

//   updateVolunteer(volunteer: Volunteer, id: number): Observable<void> {
//     return this.http.put<void>(`${this.apiUrl}/${id}`, volunteer).pipe(
//       catchError(this.handleError)
//     );
//   }

//   deleteVolunteer(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// ממשקים עבור המודלים המשניים
export interface Time {
  day: string; // לדוגמה: "1" (מתאים לטופס שלך)
  startTime: string; // לדוגמה: "08:00"
  endTime: string; // לדוגמה: "12:00"
}

// ממשק עבור מודל ה-Volunteer
export interface Volunteer {
  id: number;
  fullName: string;
  phone: string;
  birthDate: string; // נשלח כ-ISO string (למשל "1990-01-01")
  password: string;
  email: string;
  extraDetailse?: string; // אופציונלי, תואם לטעות כתיב בשרת
  areaJson: string; // JSON string של Area (למשל '{"key": "TelAviv"}')
  cityJson: string; // JSON string של City
  genderJson: string; // JSON string של Gender
  availableTimesJson: string; // JSON string של Time[]
  religiosityJson: string; // JSON string של Religiosity
  languageJson: string; // JSON string של Language[]
  languagePreferenceJson: string; // JSON string של Language[]
  interestsJson: string; // JSON string של Interests[]
  genderPreferenceJson: string; // JSON string של Gender[]
  agePreferenceJson: string; // JSON string של AgeGroup[]
  religiosityPreferenceJson: string; // JSON string של Religiosity[]
  wardPreferenceJson: string; // JSON string של Ward[]
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = 'https://localhost:7100/api/volunteer'; // התאם לכתובת ה-API שלך

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getVolunteerById(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addVolunteer(volunteer: Volunteer): Observable<void> {
    return this.http.post<void>(this.apiUrl, volunteer).pipe(
      catchError(this.handleError)
    );
  }

  updateVolunteer(volunteer: Volunteer, id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, volunteer).pipe(
      catchError(this.handleError)
    );
  }

  deleteVolunteer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}