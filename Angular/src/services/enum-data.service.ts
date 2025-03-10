import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class EnumDataService {
  private apiUrl = 'https://localhost:7100/api/enums'; // שימי לב לכתובת שלך

  constructor(private http: HttpClient) {}

  getGenders(): Observable<any[]> {
    console.log("/Gender`)",this.http.get<any[]>(`${this.apiUrl}/Gender`));
    return this.http.get<any[]>(`${this.apiUrl}/Gender`);
  }

  getLanguages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Language`);
  }

  getInterests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Interests`);
  }

  getAgeGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/AgeGroup`);
  }

  getAreas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Area`);
  }

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/City`);
  }

  getDaysOfWeek(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/DayOfWeek`);
  }

  getHospitals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Hospital`);
  }

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Patient`);
  }

  getPatientPostModels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/PatientPostModel`);
  }

  getReligiosities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Religiosity`);
  }

  getTimes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Time`);
  }

  getVolunteers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Volunteer`);
  }

  getWards(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Ward`);
  }

  // אפשר להוסיף מתודה גנרית אם ברצונך לגשת ל-Enums נוספים בצורה דינמית
  getEnumData(enumName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${enumName}`);
  }
}
