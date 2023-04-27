import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleThemeButtonComponent } from './toggle-theme-button.component';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [
    ToggleThemeButtonComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ToggleThemeButtonComponent
  ]
})
export class ToggleThemeButtonModule { }
