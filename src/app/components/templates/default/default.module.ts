import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from './default.component';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
