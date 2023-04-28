import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { CountryResponse } from '../../types/countryResponse';
import { Country } from '../../types/country';



@Injectable()
export class CountriesService {
  
  readonly BASE_URL = 'https://restcountries.com/v3.1';

  countries: Country[] = [];

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<CountryResponse[]>(`${this.BASE_URL}/all`)
      .pipe(
        map((countries: CountryResponse[]) => { 
          this.countries = countries.map((country: CountryResponse) => new Country(country));
          return this.countries.slice(0, 12); 
        })
      );
  }
}
