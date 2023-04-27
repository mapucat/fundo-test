import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { ToggleThemeButtonModule } from '../../ui/toggle-theme-button/toggle-theme-button.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ToggleThemeButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
