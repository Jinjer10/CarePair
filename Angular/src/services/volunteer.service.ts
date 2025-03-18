

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// // ממשק עבור Time (תואם לטופס)
// export interface Time {
//   day: string; // לדוגמה: "1" (ראשון), "2" (שני), וכו'
//   startTime: string; // לדוגמה: "08:00"
//   endTime: string; // לדוגמה: "12:00"
// }

// // ממשק עבור Volunteer (מותאם למחלקה ולטופס)
// export interface Volunteer {
//   // id: number;
//   fullName: string;
//   phone: string;
//   birthDate: string; // תאריך בפורמט ISO (למשל "1990-01-01")
//   password: string;
//   email: string;
//   extraDetailse?: string; // אופציונלי, תואם לשם המשתנה במחלקה
//   areaJson: string; // JSON string של Area
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
//   private apiUrl = 'https://localhost:7100/api/volunteer'; // התאם ל-URL של ה-API שלך

//   constructor(private http: HttpClient) {}

//   // טיפול בשגיאות
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     console.error('An error occurred:', error.message);
//     return throwError(() => new Error('משהו השתבש; אנא נסה שוב מאוחר יותר.'));
//   }

//   // קבלת כל המתנדבים
//   getVolunteers(): Observable<Volunteer[]> {
//     return this.http.get<Volunteer[]>(this.apiUrl).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // קבלת מתנדב לפי ID
//   getVolunteerById(id: number): Observable<Volunteer> {
//     return this.http.get<Volunteer>(`${this.apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // הוספת מתנדב חדש
//   addVolunteer(volunteer: Volunteer): Observable<void> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.http.post<void>(this.apiUrl, volunteer, { headers }).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // עדכון מתנדב קיים
//   updateVolunteer(volunteer: Volunteer, id: number): Observable<void> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.http.put<void>(`${this.apiUrl}/${id}`, volunteer, { headers }).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // מחיקת מתנדב
//   deleteVolunteer(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // קבלת פרטי המתנדב הנוכחי (עם אימות)
//   getMeVolunteer(): Observable<Volunteer> { // שיניתי את הטיפוס מ-any ל-Volunteer
//     const token = localStorage.getItem('token');
//     if (!token) {
//       return throwError(() => new Error('לא נמצא טוקן אימות'));
//     }

//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });

//     return this.http.get<Volunteer>(`${this.apiUrl}/me`, { headers }).pipe(
//       catchError(this.handleError)
//     );
//   }
// }

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

// ממשק עבור Volunteer (מותאם למבנה החדש)
export interface Volunteer {
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
  availableTimesJson: string; // JSON string של Time[]
  availableTimes: Time[]; // מערך מפורק חדש
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
  wardPreferenceJson: string; // JSON string של Ward[]
  wardPreference: number[]; // מערך מפורק חדש
  ageGroup: number; // שדה חדש
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

// הוספת מתנדב חדש (מערך של Volunteer)
addVolunteer(volunteer: Volunteer): Observable<void> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  console.log('מתנדבים שנשלחים לשרת:', volunteer);
  console.log('JSON שנשלח:', JSON.stringify(volunteer, null, 2));

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
  getMeVolunteer(): Observable<Volunteer> {
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