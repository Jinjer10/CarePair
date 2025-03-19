// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MatchingService {
//   private apiUrl = 'api/match'; // בסיס ה-URL של ה-API

//   constructor(private https: HttpClient) {}

//   // פונקציה למציאת התאמה עבור משתמש
//   findMatch(userId: number, isVolunteer: boolean): Observable<any> {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
//     const url = `${this.apiUrl}/${isVolunteer ? 'volunteer' : 'patient'}/${userId}/pending-match`;
//     return this.https.get(url, { headers });
//   }

//   // פונקציה לאישור התאמה
//   approveMatch(userId: number, matchedUserId: number, isVolunteer: boolean): Observable<any> {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
//     const body = { userId, matchedUserId, isVolunteer };
//     return this.https.post(`${this.apiUrl}/confirm`, body, { headers });
//   }

//   // פונקציה לקבלת פרטי התאמה פעילה
//   getActiveMatch(userId: number, isVolunteer: boolean): Observable<any> {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
//     const url = `${this.apiUrl}/${isVolunteer ? 'volunteer' : 'patient'}/${userId}/active-match`;
//     return this.https.get(url, { headers });
//   }


// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {
  private apiUrl = 'https://localhost:7100/api/match'; // בסיס ה-URL של ה-API עם HTTPS

  constructor(private http: HttpClient) {}

  // פונקציה למציאת התאמה עבור משתמש
  findMatch(userId: number, isVolunteer: boolean): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/${isVolunteer ? 'volunteers' : 'patients'}/${userId}/pending-match`;
    return this.http.get(url, { headers });
  }

  // פונקציה לאישור התאמה
  approveMatch(userId: number, matchedUserId: number, isVolunteer: boolean): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = { userId, matchedUserId, isVolunteer };
    return this.http.post(`${this.apiUrl}/confirm`, body, { headers });
  }

  // פונקציה לקבלת פרטי התאמה פעילה
  getActiveMatch(userId: number, isVolunteer: boolean): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/${isVolunteer ? 'volunteers' : 'patients'}/${userId}/active-match`;
    return this.http.get(url, { headers });
  }

  // פונקציה להסרת התאמות שפג תוקפן
  removeExpiredMatches(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/remove-expired`, {}, { headers });
  }

  // פונקציה לאיפוס התאמות חודשיות
  resetMonthlyMatches(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/reset-monthly`, {}, { headers });
  }

  // פונקציה לביצוע שיבוץ בין מתנדבים למטופלים
  matchVolunteersToPatients(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/MatchVolunteersToPatients`, {}, { headers });
  }
}