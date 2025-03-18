
import { Component, Directive, forwardRef } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { FormsModule, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router , RouterLink} from '@angular/router';  // הוספת Router

// PasswordValidatorDirective נשאר אותו דבר
@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const minLength = value.length >= 8;

    const valid = hasUpperCase && hasLowerCase && hasNumeric && minLength;
    return valid ? null : { passwordStrength: true };
  }
}

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [FormsModule, NgIf, PasswordValidatorDirective, RouterLink], // הוספת RouterLink
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: SignInService,
    private router: Router  // הזרקת Router
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const userData = {
        email: this.email,
        password: this.password
      };
      console.log("userData", userData);

      this.authService.login(this.email, this.password).subscribe({
        // next: (response) => {
        //   console.log('Response:', response.token);
        //
        //   this.errorMessage = '';
        //   this.router.navigate(['personalArea']); // ניתוב לאחר התחברות מוצלחת
        // },
        next: () => {
          console.log('הרשמה בוצעה בהצלחה');
          this.authService.login(this.email, this.password).subscribe({ // ביצוע התחברות אוטומטית
            next: () => {
              console.log('התחברות אוטומטית הצליחה');
              this.router.navigate(['personalArea']);
            },
            error: (err) => {
              console.error('שגיאה בהתחברות אוטומטית', err);
            }
          });
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = error.error?.message || 'כתובת המייל או הסיסמא שגויים';
        }
      });
    } else {
      this.errorMessage = 'אנא מלא את כל השדות בצורה תקינה';
    }
  }
}