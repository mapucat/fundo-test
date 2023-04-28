import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CountriesModule } from 'src/app/services/countries/countries.module';
import { CountryCardModule } from 'src/app/components/ui/country-card/country-card.module';
import { HomeComponent } from './home.component'



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModule,
    CountriesModule,
    CountryCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
