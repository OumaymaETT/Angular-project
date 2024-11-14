import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component  {

  constructor(private router: Router) {}

  goToTransactions() {
    this.router.navigate(['/transactions']);
  }

}
