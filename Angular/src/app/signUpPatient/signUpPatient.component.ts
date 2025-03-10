import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({

  standalone: true,
  selector: 'app-signUpPatient',
  templateUrl: './signUpPatient.component.html',
  styleUrls: ['./signUpPatient.component.css'],
  imports: [RouterModule]  // ← חובה בשביל routerLink
})
export class SignUpPatientComponent {
  onSubmit(): void {
    console.log("on submit signUp patient")
  }
}