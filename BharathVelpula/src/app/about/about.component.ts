import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  mailTo() {
    window.open('mailto:vbking151822@gmail.com');
  }
}
