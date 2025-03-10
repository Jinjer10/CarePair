import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({

  standalone: true,
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
  imports: [RouterModule]  // ← חובה בשביל routerLink
})
export class SignUpComponent {
  onSubmit(): void {
    console.log("on submit signUp patient")
  }
}