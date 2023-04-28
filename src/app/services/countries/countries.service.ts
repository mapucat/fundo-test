import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, count, map, retry } from 'rxjs/operators';

import { CountryResponse } from '../../types/countryResponse';
import { BorderCountryDetail, Country } from '../../types/country';



@Injectable()
export class CountriesService {
  
  readonly BASE_URL = 'https://restcountries.com/v3.1';

  countries: Country[] = [];

  constructor(private http: HttpClient) { }

  /**
   * Get all countries 
   * @returns list of 12 countries
   */
  getCountries() {
    return this.http.get<CountryResponse[]>(`${this.BASE_URL}/all`)
      .pipe(
        map((countries: CountryResponse[]) => { 
          this.countries = countries.map((country: CountryResponse) => new Country(country));
          return this.countries.slice(0, 12); 
        })
      );
  }

  /**
   * Get countries by cca2, ccn3, cca3 or cioc
   * @param args list of countries's cca2, ccn3, cca3 or cioc
   * @returns countries found
   */
  getCountriesById(...args: string[]) {
    return this.http.get<CountryResponse[]>(`${this.BASE_URL}/alpha?codes=${args.join(',')}`)
      .pipe(
        map((countries: CountryResponse[]) => countries.map((country: CountryResponse) => new Country(country)))
      );
  }

  /**
   * Get country by cca2, ccn3, cca3 or cioc
   * @param id country's cca2, ccn3, cca3 or cioc
   * @returns country found
   */
  getCountryById(id: string) {
    return this.getCountriesById(id)
      .pipe(
        map((countries: Country[]) => countries[0])
      );
  }

  /**
   * Get country by cca2, ccn3, cca3 or cioc
   * @param id country's cca2, ccn3, cca3 or cioc
   * @returns country found
   */
  getBorderCountriesDetails(country: Country): Observable<{ country: Country, borderCountriesDetails: BorderCountryDetail[] }> {
    if (country.borderCountries.length !== 0) {
      return this.getCountriesById(...country.borderCountries)
        .pipe(
          map((borderCountries: Country[]) => 
            ({ 
              country,
              borderCountriesDetails: borderCountries.map((borderCountry: Country) => ({ name: borderCountry.name, cca2: borderCountry.cca2 }) as BorderCountryDetail) }))
        );
    }
    return of({ country, borderCountriesDetails: [] });
  }
}
