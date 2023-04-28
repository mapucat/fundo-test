import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { IconModule } from '../../ui/icon/icon.module';
import { ButtonModule } from '../../ui/button/button.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
