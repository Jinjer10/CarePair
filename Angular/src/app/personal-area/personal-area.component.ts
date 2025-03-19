import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { VolunteerService } from '../../services/volunteer.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router'; // הוספת Router לניתוב לאחר מחיקה


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  imports: [CommonModule],
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {
  userData: any;
  userRole: 'patient' | 'volunteer' | 'unknown' = 'unknown';

  constructor(
    private patientService: PatientService,
    private volunteerService: VolunteerService,
    private router: Router ) {}

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

  // פונקציה לעדכון פרטים
  updateProfile() {
    if (this.userRole === 'patient') {
      this.router.navigate(['/update-patient']); // ניתוב לדף עדכון למטופלים
    } else if (this.userRole === 'volunteer') {
      this.router.navigate(['/update-volunteer']); // ניתוב לדף עדכון למתנדבים
    }
  }

  // פונקציה למחיקת חשבון
  deleteProfile() {
    if (confirm('האם אתה בטוח שברצונך למחוק את החשבון? פעולה זו אינה ניתנת לביטול.')) {
      if (this.userRole === 'patient') {
        this.patientService.deletePatient().subscribe({
          next: () => {
            this.handleDeleteSuccess();
          },
          error: (err) => {
            console.error('שגיאה במחיקת חשבון מטופל:', err);
            alert('שגיאה במחיקת החשבון');
          }
        });
      } else if (this.userRole === 'volunteer') {
        this.volunteerService.deleteVolunteer().subscribe({
          next: () => {
            this.handleDeleteSuccess();
          },
          error: (err) => {
            console.error('שגיאה במחיקת חשבון מתנדב:', err);
            alert('שגיאה במחיקת החשבון');
          }
        });
      }
    }
  }

  // פונקציה לטיפול במחיקה מוצלחת
  private handleDeleteSuccess() {
    localStorage.removeItem('token'); // הסרת הטוקן
    alert('החשבון נמחק בהצלחה');
    this.router.navigate(['/signIn']); // ניתוב לדף התחברות
  }
}


interface TokenPayload {
  [key: string]: any;
}



