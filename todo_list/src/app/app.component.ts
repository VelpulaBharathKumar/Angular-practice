import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  title = 'todo_list';
  loadPosts = [];
  constructor(private http: HttpClient){}

  ngOnInit() {
    
  }

  onCreatePost(value: any) {
    this.http.post('https://personal-e7c5d-default-rtdb.firebaseio.com/posts.json', value).subscribe(data => {
      console.log(data);
    })
    // console.log(value)
  }
}
