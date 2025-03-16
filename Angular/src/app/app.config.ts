// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AuthInterceptor } from '../services/auth.interceptor'; // הנתיב שים לב שהוא נכון
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideClientHydration(withEventReplay()),
//     provideHttpClient(
//       withInterceptorsFromDi() // 👈 זה מוסיף את ה־Interceptor כמו שצריך
//       {
//         provide: HTTP_INTERCEPTORS,
//         useClass: AuthInterceptor,
//         multi: true
//       }
//     )
//   ]
// };
// app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptor } from '../services/auth.interceptor'; // ודא שהנתיב נכון

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // ✅ מוסיפים את ה-interceptors מה-DI
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ רישום של ה-Interceptor כ-Provider רגיל
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
