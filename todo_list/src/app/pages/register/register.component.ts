import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: `./register.component.html`,
  styleUrls: ['./register.component.scss'],
  providers: [HttpClient],
})
export class RegisterComponent {
  message = '';
  constructor(
    private location: Location,
    private router: Router,
    private http: HttpClient
  ) {}

  onBack() {
    this.location.back();
  }

  signUp(value: any) {
    console.log(value);
    const vv = {
      email: value.email,
      password: value.password,
      returnSecureToken: true,
    };
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiDZs_KhfkXasMwAS3IbV3iA9a52HmgqE',
        vv
      )
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/products');
        this.message = 'Sign Up successfully';
      });
  }
  //Signup api

  onCreatePost(value: any) {
    this.http
      .post(
        'https://personal-e7c5d-default-rtdb.firebaseio.com/posts.json',
        value
      )
      .subscribe((data) => {
        console.log(data);
      });
    // console.log(value)
  }

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
      .subscribe((data) => {});
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  }
}
