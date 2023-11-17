import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}

  scrollToSkills() {
    const skillsSection = this.el.nativeElement.querySelector('#skillsSection');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjects() {
    const projects = this.el.nativeElement.querySelector('#projects');
    projects.scrollIntoView({ behavior: 'smooth' });
  }
}
