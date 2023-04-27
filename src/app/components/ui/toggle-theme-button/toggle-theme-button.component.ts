import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme-button',
  templateUrl: './toggle-theme-button.component.html',
  styleUrls: ['./toggle-theme-button.component.scss']
})
export class ToggleThemeButtonComponent {

  /**
   * Indicates if dark mode is active
   */
  darkModeOn: boolean = false;

  constructor() {}

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
