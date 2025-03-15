import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  
  private apiUrl = 'https://localhost:7100/api/Auth';  // כתובת ה-API שלך, עדכן אותה לכתובת הנכונה של ה-API

  constructor(private http: HttpClient) {}

  // פונקציה לשלוח את נתוני המשתמש
  login(email: string, password: string): Observable<any> {
    const userData = {
      email: email,
      password: password
    };

    return this.http.post(this.apiUrl, userData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
