

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// טיפוס עבור הפורמט של הנתונים שצריך להחזיר
export interface EnumItem {
  id: number; // מספר סידורי מבוסס על הסדר מהשרת
  key: string; // הערך שיישלח לשרת (למשל, "Male")
  value: string; // הערך שיוצג ב-UI (למשל, "זכר")
}

@Injectable({ providedIn: 'root' })
export class EnumDataService {
  private apiUrl = 'https://localhost:7100/api/enums'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  // פונקציה עזר להמרת נתונים מהשרת לפורמט הנדרש
  private transformToEnumItem(data: any): EnumItem[] {
    if (Array.isArray(data)) {
      // תמיכה במקרה שבו השרת מחזיר מערך של מחרוזות
      return data.map((item, index) => ({
        id: index, //מתחיל מ-0
        key: item,
        value: item // במקרה כזה, נניח שהשרת לא שלח תיאור
      }));
    } else if (typeof data === 'object' && data !== null) {
      // השרת מחזיר מילון כמו {"Male": "זכר", "Female": "נקבה"}
      return Object.entries(data).map(([key, value], index) => ({
        id: index , // id לפי הסדר
        key: key, // שם ה-enum (למשל, "Male")
        value: value as string // התיאור מה-Display (למשל, "זכר")
      }));
    }
    console.warn('נתוני Enum לא תקינים:', data);
    return [];
  }

  getGenders(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Gender`).pipe(
      map(data => {
        console.log('Genders from API:', data); // לניפוי שגיאות
        return this.transformToEnumItem(data);
      })
    );
  }

  getLanguages(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Language`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getInterests(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Interests`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getAgeGroups(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/AgeGroup`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getAreas(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Area`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getCities(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/City`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getDaysOfWeek(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/DayOfWeek`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getHospitals(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Hospital`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getReligiosities(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Religiosity`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }

  getWards(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Ward`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }
  getHospitalls(): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/Hospital`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }


  getEnumData(enumName: string): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/${enumName}`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }
}