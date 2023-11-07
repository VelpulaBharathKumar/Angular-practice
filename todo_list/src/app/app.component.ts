import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo_list';
  loadPosts = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  signUp(value: any) {
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
