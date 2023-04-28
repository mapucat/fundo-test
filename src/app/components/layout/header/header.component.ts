import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = '';

  /**
   * Indicates if dark mode is active
   */
  darkModeOn: boolean = false;

  toggleTheme() {
    const element = document.getElementsByTagName('body')[0];
    this.darkModeOn = !this.darkModeOn;
    if (this.darkModeOn) {
      element?.classList.add("dark-mode");
    } else {
      element?.classList.remove("dark-mode");
    }
  }
}
