import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { CountriesModule } from 'src/app/services/countries/countries.module';
import { CountryCardModule } from 'src/app/components/ui/country-card/country-card.module';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    CountriesModule,
    CountryCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
