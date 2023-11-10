import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-print-none">
      <a class="navbar-brand" href="#" routerLink="/products"
        ><img
          src="https://c.ndtvimg.com/2021-03/ci58tego_bharatemarketappporatallaunchmainlarge_625x300_12_March_21.jpg?downsize=950:*"
          class="logo mr-2"
        />Bharat e-market</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/products"
              >Products <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/billing">Billing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/checkout">Checkout</a>
          </li>
        </ul>
      </div>
      <button
        style="margin-right: 4px;"
        class="btn btn-primary"
        (click)="logout()"
      >
        Log out
      </button>
    </nav>
  `,

  styles: [
    `
      .logo {
        height: 60px;
        width: auto;
      }
    `,
  ],
})
export class MenuDir {
  constructor(private router: Router) {}
  logout() {
    this.router.navigateByUrl('/login');
  }
}
