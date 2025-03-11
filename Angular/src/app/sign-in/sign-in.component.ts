import { Component } from '@angular/core';
import { SignInService} from '../../services/sign-in.service'; // היבוא של ה-Service שלך
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: SignInService) {} // הזרקת ה-Service לקומפוננטה

  // פונקציה לשליחת הנתונים
  onSubmit() {
    // יצירת אובייקט עם הנתונים
    const userData = {
      email: this.email,
      password: this.password
    };
    console.log("userData",userData)
    // קריאה לפונקציה login ב-AuthService
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Response:', response.token);
        localStorage.setItem('token', response.token); // שמירת הטוקן ב-localStorage
        // כאן אתה יכול להוסיף את הלוגיקה אחרי שהתגובה התקבלה (למשל הפניית המשתמש לדף אחר)
      },
      error: (error) => {
        console.error('Error:', error);
        // כאן אתה יכול להוסיף טיפול בשגיאות
      }
    });
  }
}
