// import { Component } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-homePage',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './homePage.component.html',
//   styleUrl: './homePage.component.scss'
// })
// export class HomePageComponent {

//     constructor(private _router: Router) { }
  

//   }

// homePage.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss'
})
export class HomePageComponent {
  constructor(private _router: Router) { }
}