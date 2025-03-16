
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// // ממשקים עבור המודלים המשניים
// export interface Time {
//   day: string; // לדוגמה: "1" (מתאים לטופס שלך)
//   startTime: string; // לדוגמה: "08:00"
//   endTime: string; // לדוגמה: "12:00"
// }

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
   
  
//      getMeVolunteer(): Observable<any> {
//       const token = localStorage.getItem('token'); // או מאיפה שאת שומרת את הטוקן
//       console.log('token:', token); // תוודאי שהוא קיים ונראה תקין
//       const headers = new HttpHeaders({
//         'Authorization': `Bearer ${token}`
//       });
  
//       return this.http.get<any>(`${this.apiUrl}/me`, { headers });
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// ממשק עבור Time (תואם לטופס)
export interface Time {
  day: string; // לדוגמה: "1" (ראשון), "2" (שני), וכו'
  startTime: string; // לדוגמה: "08:00"
  endTime: string; // לדוגמה: "12:00"
}

// ממשק עבור Volunteer (מותאם למחלקה ולטופס)
export interface Volunteer {
  id: number;
  fullName: string;
  phone: string;
  birthDate: string; // תאריך בפורמט ISO (למשל "1990-01-01")
  password: string;
  email: string;
  extraDetailse?: string; // אופציונלי, תואם לשם המשתנה במחלקה
  areaJson: string; // JSON string של Area
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
  private apiUrl = 'https://localhost:7100/api/volunteer'; // התאם ל-URL של ה-API שלך

  constructor(private http: HttpClient) {}

  // טיפול בשגיאות
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
  }

  // קבלת כל המתנדבים
  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // קבלת מתנדב לפי ID
  getVolunteerById(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // הוספת מתנדב חדש
  addVolunteer(volunteer: Volunteer): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<void>(this.apiUrl, volunteer, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // עדכון מתנדב קיים
  updateVolunteer(volunteer: Volunteer, id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<void>(`${this.apiUrl}/${id}`, volunteer, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // מחיקת מתנדב
  deleteVolunteer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // קבלת פרטי המתנדב הנוכחי (עם אימות)
  getMeVolunteer(): Observable<Volunteer> { // שיניתי את הטיפוס מ-any ל-Volunteer
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('לא נמצא טוקן אימות'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Volunteer>(`${this.apiUrl}/me`, { headers }).pipe(
      catchError(this.handleError)
    );
  }
}