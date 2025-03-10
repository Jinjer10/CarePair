import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css'
})
export class HomePageComponent {

    constructor(private _router: Router) { }
  
    goToStudents() {
      this._router.navigate(['/student/list']);
    }
  }