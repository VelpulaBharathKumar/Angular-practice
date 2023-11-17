import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  emarket() {
    window.open('https://personal-e7c5d.web.app/', '_blank');
  }
}
