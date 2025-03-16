import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7100/api/Patient';

  constructor(private http: HttpClient) {}

  getMePatient(): Observable<any> {
    const token = localStorage.getItem('token'); // או מאיפה שאת שומרת את הטוקן
    console.log('token:', token); // תוודאי שהוא קיים ונראה תקין
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/me`, { headers });
  }
}
