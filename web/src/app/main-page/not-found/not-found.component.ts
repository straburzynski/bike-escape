import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']

})
export class NotFoundComponent {

  constructor(private router: Router) {
  }

  takeMeHome() {
    this.router.navigate(['/dashboard'])
  }

}
