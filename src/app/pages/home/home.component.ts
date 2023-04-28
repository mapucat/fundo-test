import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountriesService } from '../../services/countries/countries.service';
import { Country, CountryCard } from 'src/app/types/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription = new Subscription();

  countriesList: CountryCard[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.subscription = this.countriesService.getCountries()
      .subscribe((countries: Country[]) => this.countriesList = countries );
  }

  ngOnDestroy() {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscription.unsubscribe();
  }
}
