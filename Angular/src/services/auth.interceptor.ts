// // auth.interceptor.ts
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     constructor() {
//         console.log('🚀 AuthInterceptor נטען');
//       }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');

//     console.log('🔐 Interceptor - בקשה נתפסה:');
//     console.log('🔗 URL:', req.url);
//     console.log('📦 שיטת בקשה:', req.method);
//     console.log('🧪 טוקן נשלף מ-localStorage:', token);

//     if (token) {
//       const cloned = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       console.log('✅ בקשה לאחר הוספת Authorization Header:', cloned);

//       return next.handle(cloned);
//     }

//     console.warn('⚠️ לא נמצא טוקן - הבקשה נשלחת ללא Authorization header');
//     return next.handle(req);
//   }
// }
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('🚀 AuthInterceptor נטען');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string | null = null;

    // בדיקה אם אנחנו בדפדפן
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token');
    }

    console.log('🔐 Interceptor - בקשה נתפסה:');
    console.log('🔗 URL:', req.url);
    console.log('📦 שיטת בקשה:', req.method);
    console.log('🧪 טוקן נשלף מ-localStorage:', token);

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('✅ בקשה לאחר הוספת Authorization Header:', cloned);
      return next.handle(cloned);
    }

    console.warn('⚠️ לא נמצא טוקן - הבקשה נשלחת ללא Authorization header');
    return next.handle(req);
  }
}