import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular';
  public message: string = '';

  constructor(private router: Router) {}
  ngOnOnit() {
    this.router.navigate(['/login']);
  }
}
