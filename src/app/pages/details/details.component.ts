import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap, take } from 'rxjs';

import { CountriesService } from 'src/app/services/countries/countries.service';
import { Country, BorderCountryDetail } from 'src/app/types/country';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  
  private subscriptions: Subscription[] = [];

  country: Country | null = null;
  borderCountriesDetails: BorderCountryDetail[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService) {
  }

  ngOnInit(){
    const subscription1$ = this.route.params.subscribe(params => {
      const subscription2$ = this.countriesService.getCountryById(params['id'])
        .pipe(
          take(1),
          switchMap((country: Country) => {
            return this.countriesService.getBorderCountriesDetails(country)
          })
        )
        .subscribe(({ country, borderCountriesDetails }) => {
          this.country = country
          this.borderCountriesDetails = borderCountriesDetails; 
        });
      this.subscriptions.push(subscription2$);
    })
    this.subscriptions.push(subscription1$);
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  goBack(): void {
    this.router.navigate([ '/home' ]);
  }
}
