
// import { Component, OnInit } from '@angular/core';
// import { PatientService } from '../../services/patient.service';
// import { VolunteerService } from '../../services/volunteer.service';
// import { CommonModule } from '@angular/common';
// import { jwtDecode } from 'jwt-decode';
// import { Router } from '@angular/router';
// import { MatchingService } from '../../services/matching.service';

// @Component({
//   selector: 'app-personal-area',
//   templateUrl: './personal-area.component.html',
//   imports: [CommonModule],
//   styleUrls: ['./personal-area.component.scss']
// })
// export class PersonalAreaComponent implements OnInit {
//   userData: any;
//   userRole: 'patient' | 'volunteer' | 'unknown' = 'unknown';
//   userId: number | null = null;

//   constructor(
//     private patientService: PatientService,
//     private volunteerService: VolunteerService,
//     private matchingService :MatchingService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.userRole = this.getUserRoleFromToken();
//     this.userId = this.getUserIdFromToken();
//     console.log("userRole", this.userRole);

//     if (this.userRole === 'patient') {
//       this.patientService.getMePatient().subscribe({
//         next: (data) => {
//           this.userData = data;
//           this.checkMatchStatus();
//           console.log('נתוני משתמש:', data);
//         },
//         error: (err) => console.error('שגיאה בקבלת נתוני משתמש:', err)
//       });
//     } else if (this.userRole === 'volunteer') {
//       this.volunteerService.getMeVolunteer().subscribe({
//         next: (data) => {
//           this.userData = data;
//           this.checkMatchStatus();
//           console.log('נתוני משתמש:', data);
//         },
//         error: (err) => console.error('שגיאה בקבלת נתוני משתמש:', err)
//       });
//     }
//   }

//   getUserRoleFromToken(): 'patient' | 'volunteer' | 'unknown' {
//     const token = localStorage.getItem('token');
//     if (!token) return 'unknown';
//     const decoded: TokenPayload = jwtDecode(token);
//     if ('PatientId' in decoded) return 'patient';
//     if ('VolunteerId' in decoded) return 'volunteer';
//     return 'unknown';
//   }

//   getUserIdFromToken(): number | null {
//     const token = localStorage.getItem('token');
//     if (!token) return null;
//     const decoded: TokenPayload = jwtDecode(token);
//     return decoded['PatientId'] ? parseInt(decoded['PatientId']) : decoded['VolunteerId'] ? parseInt(decoded['VolunteerId']) : null;
//   }

//   checkMatchStatus() {
//     const service = this.userRole === 'patient' ? this.patientService : this.volunteerService;
//     if (this.userId) {
//       service.getActiveMatch(this.userId).subscribe({
//         next: (data) => this.userData.matchStatus = 'approved',
//         error: () => {
//           if(this.userId)
//           service.findMatch(this.userId).subscribe({
//             next: (data) => {
//               this.userData.matchStatus = 'pending';
//               this.userData.matchDetails = data[this.userRole === 'patient' ? 'MatchedVolunteer' : 'MatchedPatient'];
//             },
//             error: () => this.userData.matchStatus = null
//           });
//         } 
//       });
//     } console.log(this.userData, "userData");
//   }
 

//   updateProfile() {
//     if (this.userRole === 'patient') this.router.navigate(['/update-patient']);
//     else if (this.userRole === 'volunteer') this.router.navigate(['/update-volunteer']);
//   }



//     deleteProfile() {
//     if (confirm('האם אתה בטוח שברצונך למחוק את החשבון? פעולה זו אינה ניתנת לביטול.')) {
//       if (this.userRole === 'patient') {
//         this.patientService.deletePatient().subscribe({
//           next: () => this.handleDeleteSuccess(),
//           error: (err) => {
//             console.error('שגיאה במחיקת חשבון מטופל:', err);
//             alert('שגיאה במחיקת החשבון');
//           }
//         });
//       } else if (this.userRole === 'volunteer') {
//         this.volunteerService.deleteVolunteer().subscribe({
//           next: () => this.handleDeleteSuccess(),
//           error: (err) => {
//             console.error('שגיאה במחיקת חשבון מתנדב:', err);
//             alert('שגיאה במחיקת החשבון');
//           }
//         });
//       }
//     }
//   }

//   private handleDeleteSuccess() {
//     localStorage.removeItem('token');
//     alert('החשבון נמחק בהצלחה');
//     this.router.navigate(['/signIn']);
//   }

//   findMatch() {
//     if (!this.userId) return;
//     this.matchingService.matchVolunteersToPatients;
//     const service = this.userRole === 'patient' ? this.patientService : this.volunteerService;
//     service.findMatch(this.userId).subscribe({
//       next: (data) => {
//         this.userData.matchStatus = 'pending';
//         if(this.userRole === 'patient'){
//           this.userData.matchDetails = data.matchedVolunteer
//         }else {
//           this.userData.matchDetails = data.matchedPatient

//         }
//         alert('נמצאה התאמה! אנא אשר את השיבוץ.');
       
//       },
//       error: (err) => {
//         console.error('שגיאה בחיפוש התאמה:', err);
//         alert('לא נמצאה התאמה כרגע, נסה שוב מאוחר יותר.');
//       }
//     });
//   }

//   viewMatchDetails() {
//     if (this.userData.matchStatus === 'pending') {
//       const partialDetails =  {
//         fullName: this.userData.matchDetails.fullName,
//         ageGroup: this.userData.matchDetails.ageGroup,
//         interests: this.userData.matchDetails.interests
//       };
//       alert(`פרטי המשובץ:\nשם: ${partialDetails.fullName}\nקבוצת גיל: ${partialDetails.ageGroup}\nתחומי עניין: ${partialDetails.interests.join(', ')}`);
//     } else if (this.userData.matchStatus === 'approved') {
//       alert(`פרטי המשובץ:\nשם: ${this.userData.matchDetails.fullName}\nטלפון: ${this.userData.matchDetails.phone}\nמייל: ${this.userData.matchDetails.email}\nגיל: ${this.userData.matchDetails.age}\nתחומי עניין: ${this.userData.matchDetails.interests.join(', ')}`);
//     }
//   }

//   approveMatch() {
//     if (!this.userId || !this.userData.matchDetails.id) return;
//    var isVolunteer
//    if(this.userRole === "patient"){
//     isVolunteer= false}
//   else{
//   isVolunteer = true}
//     this.matchingService.approveMatch(this.userId, this.userData.matchDetails.id, isVolunteer).subscribe({
//       next: () => {
//         this.userData.matchStatus = 'approved';
//         alert('ההתאמה אושרה בהצלחה! כעת תוכל לראות את כל הפרטים.');
//       },
//       error: (err) => {
//         console.error('שגיאה באישור התאמה:', err);
//         alert('שגיאה באישור ההתאמה, נסה שוב.');
//       }
//     }); console.log(  this.userData.matchDetails.id, "ID");
//   }
// }

// interface TokenPayload {
//   [key: string]: any;
// }
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { VolunteerService } from '../../services/volunteer.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { MatchingService } from '../../services/matching.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  imports: [CommonModule],
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {
  userData: any;
  userRole: 'patient' | 'volunteer' | 'unknown' = 'unknown';
  userId: number | null = null;

  constructor(
    private patientService: PatientService,
    private volunteerService: VolunteerService,
    private matchingService :MatchingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRole = this.getUserRoleFromToken();
    this.userId = this.getUserIdFromToken();
    console.log("userRole", this.userRole);

    if (this.userRole === 'patient') {
      this.patientService.getMePatient().subscribe({
        next: (data) => {
          this.userData = data;
          this.checkMatchStatus();
          console.log('נתוני משתמש:', data);
        },
        error: (err) => console.error('שגיאה בקבלת נתוני משתמש:', err)
      });
    } else if (this.userRole === 'volunteer') {
      this.volunteerService.getMeVolunteer().subscribe({
        next: (data) => {
          this.userData = data;
          this.checkMatchStatus();
          console.log('נתוני משתמש:', data);
        },
        error: (err) => console.error('שגיאה בקבלת נתוני משתמש:', err)
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

  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded: TokenPayload = jwtDecode(token);
    return decoded['PatientId'] ? parseInt(decoded['PatientId']) : decoded['VolunteerId'] ? parseInt(decoded['VolunteerId']) : null;
  }

  checkMatchStatus() {
    const service = this.userRole === 'patient' ? this.patientService : this.volunteerService;
    if (this.userId) {
      service.getActiveMatch(this.userId).subscribe({
        next: (data) => this.userData.matchStatus = 'approved',
        error: () => {
          if(this.userId)
          service.findMatch(this.userId).subscribe({
            next: (data) => {
              this.userData.matchStatus = 'pending';
              this.userData.matchDetails = data[this.userRole === 'patient' ? 'MatchedVolunteer' : 'MatchedPatient'];
            },
            error: () => this.userData.matchStatus = null
          });
        } 
      });
    } console.log(this.userData, "userData");
  }
 

  updateProfile() {
    if (this.userRole === 'patient') this.router.navigate(['/update-patient']);
    else if (this.userRole === 'volunteer') this.router.navigate(['/update-volunteer']);
  }



    deleteProfile() {
    if (confirm('האם אתה בטוח שברצונך למחוק את החשבון? פעולה זו אינה ניתנת לביטול.')) {
      if (this.userRole === 'patient') {
        this.patientService.deletePatient().subscribe({
          next: () => this.handleDeleteSuccess(),
          error: (err) => {
            console.error('שגיאה במחיקת חשבון מטופל:', err);
            alert('שגיאה במחיקת החשבון');
          }
        });
      } else if (this.userRole === 'volunteer') {
        this.volunteerService.deleteVolunteer().subscribe({
          next: () => this.handleDeleteSuccess(),
          error: (err) => {
            console.error('שגיאה במחיקת חשבון מתנדב:', err);
            alert('שגיאה במחיקת החשבון');
          }
        });
      }
    }
  }

  private handleDeleteSuccess() {
    localStorage.removeItem('token');
    alert('החשבון נמחק בהצלחה');
    this.router.navigate(['/signIn']);
  }

  findMatch() {
    if (!this.userId) return;
    this.matchingService.matchVolunteersToPatients;
    const service = this.userRole === 'patient' ? this.patientService : this.volunteerService;
    service.findMatch(this.userId).subscribe({
      next: (data) => {
        this.userData.matchStatus = 'pending';
        if(this.userRole === 'patient'){
          this.userData.matchDetails = data.matchedVolunteer
        }else {
          this.userData.matchDetails = data.matchedPatient

        }
        alert('נמצאה התאמה! אנא אשר את השיבוץ.');
       
      },
      error: (err) => {
        console.error('שגיאה בחיפוש התאמה:', err);
        alert('לא נמצאה התאמה כרגע, נסה שוב מאוחר יותר.');
      }
    });
  }

  viewMatchDetails() {
    if (this.userData.matchStatus === 'pending') {
      const partialDetails =  {
        fullName: this.userData.matchDetails.fullName,
        ageGroup: this.userData.matchDetails.ageGroup,
        interests: this.userData.matchDetails.interests
      };
      alert(`פרטי המשובץ:\nשם: ${partialDetails.fullName}\nקבוצת גיל: ${partialDetails.ageGroup}\nתחומי עניין: ${partialDetails.interests.join(', ')}`);
    } else if (this.userData.matchStatus === 'approved') {
      alert(`פרטי המשובץ:\nשם: ${this.userData.matchDetails.fullName}\nטלפון: ${this.userData.matchDetails.phone}\nמייל: ${this.userData.matchDetails.email}\nגיל: ${this.userData.matchDetails.age}\nתחומי עניין: ${this.userData.matchDetails.interests.join(', ')}`);
    }
  }

  // approveMatch() {
  //   if (!this.userId || !this.userData.matchDetails.id) return;
  //  var isVolunteer
  //  if(this.userRole === "patient"){
  //   isVolunteer= false}
  // else{
  // isVolunteer = true}
  //   this.matchingService.approveMatch(this.userId, this.userData.matchDetails.id, isVolunteer).subscribe({
  //     next: () => {
  //       this.userData.matchStatus = 'approved';
  //       alert('ההתאמה אושרה בהצלחה! כעת תוכל לראות את כל הפרטים.');
  //     },
  //     error: (err) => {
  //       console.error('שגיאה באישור התאמה:', err);
  //       alert('שגיאה באישור ההתאמה, נסה שוב.');
  //     }
  //   }); console.log(  this.userData.matchDetails.id, "ID");
  // }
}

interface TokenPayload {
  [key: string]: any;
}