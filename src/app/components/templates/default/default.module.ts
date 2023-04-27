import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultComponent } from './default.component';
import { HeaderModule } from '../../layout/header/header.module';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
