
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { map } from 'rxjs/operators';

// // // טיפוס עבור הפורמט של הנתונים שצריך להחזיר
// // export interface EnumItem {
// //   key: string; // הערך שיישלח לשרת (למשל, "Male")
// //   value: string; // הערך שיוצג ב-UI (למשל, "זכר")
// // }

// // @Injectable({ providedIn: 'root' })
// // export class EnumDataService {
// //   private apiUrl = 'https://localhost:7100/api/enums'; // כתובת ה-API שלך

// //   constructor(private http: HttpClient) {}

// //   // פונקציה עזר להמרת נתונים מהשרת לפורמט הנדרש
// //   private transformToEnumItem(data: any): EnumItem[] {
// //     if (Array.isArray(data)) {
// //       // אם השרת מחזיר מערך של מחרוזות (למשל, ["Male", "Female"])
// //       return data.map(item => ({
// //         key: item,
// //         value: this.getDisplayName(item) // המרה לתצוגה ידידותית
// //       }));
// //     } else if (typeof data === 'object' && data !== null) {
// //       // אם השרת מחזיר מילון (למשל, {"Male": "זכר", "Female": "נקבה"})
// //       return Object.entries(data).map(([key, value]) => ({
// //         key: key,
// //         value: value as string
// //       }));
// //     }
// //     console.warn('נתוני Enum לא תקינים:', data);
// //     return [];
// //   }

// //   // פונקציה להמרת שם ה-enum לתצוגה ידידותית (למשל, "Male" ל-"זכר")
// //   private getDisplayName(enumValue: string): string {
// //     // כאן אפשר להוסיף מיפוי לעברית אם ה-API לא מחזיר תצוגה מוכנה
// //     const displayNames: { [key: string]: string } = {
// //       // Gender
// //       Male: 'זכר',
// //       Female: 'נקבה',
// //       // Language
// //       Hebrew: 'עברית',
// //       English: 'אנגלית',
// //       Arabic: 'ערבית',
// //       Yiddish: 'יידיש',
// //       Russian: 'רוסית',
// //       Spanish: 'ספרדית',
// //       French: 'צרפתית',
// //       German: 'גרמנית',
// //       Italian: 'איטלקית',
// //       Chinese: 'סינית',
// //       Japanese: 'יפנית',
// //       Korean: 'קוריאנית',
// //       Other: 'אחר',
// //       // Interests
// //       Art: 'אמנות',
// //       Music: 'מוזיקה',
// //       Sports: 'ספורט',
// //       Reading: 'קריאה',
// //       Cooking: 'בישול',
// //       Gardening: 'גינון',
// //       Traveling: 'טיולים',
// //       Hiking: 'טיולי שטח',
// //       Movies: 'סרטים',
// //       Theater: 'תיאטרון',
// //       Dancing: 'ריקוד',
// //       Photography: 'צילום',
// //       Writing: 'כתיבה',
// //       Gaming: 'משחקי וידאו',
// //       Pets: 'חיות מחמד',
// //       // Religiosity
// //       Secular: 'חילוני',
// //       Religious: 'דתי',
// //       Orthodox: 'חרדי',
// //       // AgeGroup
// //       Children: 'ילדים',
// //       Teenagers: 'בני נוער',
// //       YoungAdults: 'צעירים',
// //       Adults: 'מבוגרים',
// //       Elderly: 'קשישים'
// //       // הוסף כאן מיפויים נוספים עבור Area, City, Hospital, Ward אם צריך
// //     };
// //     return displayNames[enumValue] || enumValue.replace(/_/g, ' ');
// //   }

// //   getGenders(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Gender`).pipe(
// //       map(data => {
// //         console.log('Genders from API:', data); // לניפוי שגיאות
// //         return this.transformToEnumItem(data);
// //       })
// //     );
// //   }

// //   getLanguages(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Language`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getInterests(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Interests`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getAgeGroups(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/AgeGroup`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getAreas(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Area`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getCities(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/City`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getDaysOfWeek(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/DayOfWeek`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getHospitals(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Hospital`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getPatients(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Patient`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getPatientPostModels(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/PatientPostModel`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getReligiosities(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Religiosity`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getTimes(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Time`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getVolunteers(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Volunteer`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getWards(): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/Ward`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }

// //   getEnumData(enumName: string): Observable<EnumItem[]> {
// //     return this.http.get<any>(`${this.apiUrl}/${enumName}`).pipe(
// //       map(data => this.transformToEnumItem(data))
// //     );
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// // טיפוס עבור הפורמט של הנתונים שצריך להחזיר
// export interface EnumItem {
//   id: number; // מספר סידורי מבוסס על הסדר מהשרת
//   key: string; // הערך שיישלח לשרת (למשל, "Male")
//   value: string; // הערך שיוצג ב-UI (למשל, "זכר")
// }

// @Injectable({ providedIn: 'root' })
// export class EnumDataService {
//   private apiUrl = 'https://localhost:7100/api/enums'; // כתובת ה-API שלך

//   constructor(private http: HttpClient) {}

//   // פונקציה עזר להמרת נתונים מהשרת לפורמט הנדרש עם id לפי סדר
//   private transformToEnumItem(data: any): EnumItem[] {
//     if (Array.isArray(data)) {
//       // אם השרת מחזיר מערך של מחרוזות (למשל, ["Male", "Female"])
//       return data.map((item, index) => ({
//         id: index , // id מתחיל מ-1 (אפשר לשנות ל-0 אם נדרש)
//         key: item,
//         value: item // המרה לתצוגה ידנית אם נדרש
//       }));
//     } else if (typeof data === 'object' && data !== null) {
//       // אם השרת מחזיר מילון (למשל, {"Male": "זכר", "Female": "נקבה"})
//       return Object.entries(data).map(([key, value], index) => ({
//         id: index , // id לפי הסדר
//         key: key,
//         value: value as string
//       }));
//     }
//     console.warn('נתוני Enum לא תקינים:', data);
//     return [];
//   }

//   // // פונקציה להמרת שם ה-enum לתצוגה ידידותית (למשל, "Male" ל-"זכר")
//   // private getDisplayName(enumValue: string): string {
//   //   // מיפוי ידני לתצוגה בעברית אם השרת לא מחזיר ערכים מוכנים
//   //   const displayNames: { [key: string]: string } = {
//   //     // Gender
//   //     Male: 'זכר',
//   //     Female: 'נקבה',
//   //     // Language
//   //     Hebrew: 'עברית',
//   //     English: 'אנגלית',
//   //     Arabic: 'ערבית',
//   //     Yiddish: 'יידיש',
//   //     Russian: 'רוסית',
//   //     Spanish: 'ספרדית',
//   //     French: 'צרפתית',
//   //     German: 'גרמנית',
//   //     Italian: 'איטלקית',
//   //     Chinese: 'סינית',
//   //     Japanese: 'יפנית',
//   //     Korean: 'קוריאנית',
//   //     Other: 'אחר',
//   //     // Interests
//   //     Art: 'אמנות',
//   //     Music: 'מוזיקה',
//   //     Sports: 'ספורט',
//   //     Reading: 'קריאה',
//   //     Cooking: 'בישול',
//   //     Gardening: 'גינון',
//   //     Traveling: 'טיולים',
//   //     Hiking: 'טיולי שטח',
//   //     Movies: 'סרטים',
//   //     Theater: 'תיאטרון',
//   //     Dancing: 'ריקוד',
//   //     Photography: 'צילום',
//   //     Writing: 'כתיבה',
//   //     Gaming: 'משחקי וידאו',
//   //     Pets: 'חיות מחמד',
//   //     // Religiosity
//   //     Secular: 'חילוני',
//   //     Religious: 'דתי',
//   //     Orthodox: 'חרדי',
//   //     // AgeGroup
//   //     Children: 'ילדים',
//   //     Teenagers: 'בני נוער',
//   //     YoungAdults: 'צעירים',
//   //     Adults: 'מבוגרים',
//   //     Elderly: 'קשישים',
//   //     // Area (דוגמה)
//   //     North: 'צפון',
//   //     Center: 'מרכז',
//   //     South: 'דרום',
//   //     Akko: 'עכו',
//   //     // City (דוגמה)
//   //     'Tel Aviv': 'תל אביב',
//   //     Jerusalem: 'ירושלים',
//   //     Akko: 'עכו',
//   //     // Ward (דוגמה)
//   //     Pediatrics: 'ילדים',
//   //     SocialServices: 'שירותים חברתיים',
//   //     EmotionalSupport: 'תמיכה רגשית',
//   //     ChildrensActivity: 'פעילות ילדים',
//   //     // DayOfWeek (דוגמה)
//   //     Sunday: 'ראשון',
//   //     Monday: 'שני',
//   //     Tuesday: 'שלישי',
//   //     Wednesday: 'רביעי',
//   //     Thursday: 'חמישי',
//   //     Friday: 'שישי',
//   //     Saturday: 'שבת'
//   //   };
//   //   return displayNames[enumValue] || enumValue.replace(/_/g, ' ');
//   // }

//   getGenders(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Gender`).pipe(
//       map(data => {
//         console.log('Genders from API:', data); // לניפוי שגיאות
//         return this.transformToEnumItem(data);
//       })
//     );
//   }

//   getLanguages(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Language`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getInterests(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Interests`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getAgeGroups(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/AgeGroup`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getAreas(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Area`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getCities(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/City`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getDaysOfWeek(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/DayOfWeek`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getHospitals(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Hospital`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getPatients(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Patient`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getPatientPostModels(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/PatientPostModel`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getReligiosities(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Religiosity`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getTimes(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Time`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getVolunteers(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Volunteer`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getWards(): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/Ward`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }

//   getEnumData(enumName: string): Observable<EnumItem[]> {
//     return this.http.get<any>(`${this.apiUrl}/${enumName}`).pipe(
//       map(data => this.transformToEnumItem(data))
//     );
//   }
// }

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
        id: index + 1, // מתחיל מ-1
        key: item,
        value: item // במקרה כזה, נניח שהשרת לא שלח תיאור
      }));
    } else if (typeof data === 'object' && data !== null) {
      // השרת מחזיר מילון כמו {"Male": "זכר", "Female": "נקבה"}
      return Object.entries(data).map(([key, value], index) => ({
        id: index + 1, // id לפי הסדר
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

  getEnumData(enumName: string): Observable<EnumItem[]> {
    return this.http.get<any>(`${this.apiUrl}/${enumName}`).pipe(
      map(data => this.transformToEnumItem(data))
    );
  }
}