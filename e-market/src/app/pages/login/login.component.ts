import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message = '';
  constructor(private http: HttpClient, private router: Router) {}

  login(value: any) {
    const vv = {
      email: value.email,
      password: value.password,
      returnSecureToken: true,
    };
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiDZs_KhfkXasMwAS3IbV3iA9a52HmgqE',
        vv
      )
      .subscribe({
        next: (res) => {
          this.router.navigateByUrl('/products');
        },
        error: (err) => {
          this.message = 'Error Occured';
        },
      });
  }
}
