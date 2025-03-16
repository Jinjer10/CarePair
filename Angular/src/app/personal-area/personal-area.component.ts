import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { VolunteerService } from '../../services/volunteer.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  imports: [CommonModule],
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
  userData: any;
  userRole: 'patient' | 'volunteer' | 'unknown' = 'unknown';

  constructor(
    private patientService: PatientService,
    private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    // קבלת תפקיד המשתמש מהטוקן
    this.userRole = this.getUserRoleFromToken();
    console.log("userRole",this.userRole)
    if(this.userRole==='patient'){
          // קריאה לשרת לקבלת נתוני המשתמש
    this.patientService.getMePatient().subscribe({
      next: (data) => {
        this.userData = data;
        console.log('נתוני משתמש:', data);
      },
      error: (err) => {
        console.error('שגיאה בקבלת נתוני משתמש:', err);
      }
    });
    }else{
      this.volunteerService.getMeVolunteer().subscribe({
        next: (data) => {
          this.userData = data;
          console.log('נתוני משתמש:', data);
        },
        error: (err) => {
          console.error('שגיאה בקבלת נתוני משתמש:', err);
        }
      });
    }

  }

  getUserRoleFromToken(): 'patient' | 'volunteer' | 'unknown' {
    const token = localStorage.getItem('token');
    if (!token) return 'unknown';

    const decoded: TokenPayload = jwtDecode(token);
    if ('PatientId' in decoded) return 'patient';
    if ('VolunteerId' in decoded) return 'volunteer';

    return 'unknown';
  }
}

interface TokenPayload {
  [key: string]: any;
}
// import { Component, OnInit } from '@angular/core';
// import { PatientService } from '../../services/patient.service';
// import { CommonModule } from '@angular/common';
// import jwt_decode from 'jwt-decode';
// @Component({
//   selector: 'app-personal-area',
//   templateUrl: './personal-area.component.html',
//   imports: [CommonModule],
//   styleUrls: ['./personal-area.component.css']
// })
// export class PersonalAreaComponent implements OnInit {
//   userData: any;

//   constructor(private patientService: PatientService) {}

//   ngOnInit(): void {
//     this.patientService.getMe().subscribe({
//       next: (data) => {
//         this.userData = data;
//         console.log('נתוני משתמש:', data);
//       },
//       error: (err) => {
//         console.error('שגיאה בקבלת נתוני משתמש:', err);
//       }
//     });
//   }

//   getUserRoleFromToken(): 'patient' | 'volunteer' | 'unknown' {
//     const token = localStorage.getItem('token');
//     if (!token) return 'unknown';
  
//     const decoded: TokenPayload = jwt_decode(token);
//     if ('PatientId' in decoded) return 'patient';
//     if ('VolunteerId' in decoded) return 'volunteer';
  
//     return 'unknown';
//   }
// }
// interface TokenPayload {
//   [key: string]: any;
// }


