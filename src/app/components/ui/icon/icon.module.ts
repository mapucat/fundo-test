import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IconModule { }
