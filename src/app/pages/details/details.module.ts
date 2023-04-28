import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { IconModule } from 'src/app/components/ui/icon/icon.module';
import { ButtonModule } from 'src/app/components/ui/button/button.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    ButtonModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
