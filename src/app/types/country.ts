import { CountryResponse } from "./countryResponse";

export interface CountryCard {
  flag: {
    alt: string;
    url: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

/**
 * Country abstraction
 */
export class Country implements CountryCard {
  flag: {
    alt: string;
    url: string;
  };
  name: string;
  nativeNames: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  tld: string;
  currencies: string;
  languages: string;
  borderCountries: string[];

  constructor(countryResponse: CountryResponse) {
    this.flag = {
      alt: countryResponse.flags.alt,
      url: countryResponse.flags.png
    };
    this.name = countryResponse.name.common;
    this.nativeNames = countryResponse.name.nativeName ? Object.values(countryResponse.name.nativeName).map(({ common }) => common).join(', ') : 'None';
    this.population = countryResponse.population;
    this.region = countryResponse.region;
    this.subRegion = countryResponse.subregion;
    this.capital = countryResponse.capital ? countryResponse.capital.join(', ') : 'None';
    this.tld = countryResponse.tld && countryResponse.tld.length !== 0 ? countryResponse.tld.join(', ') : 'None';
    this.currencies = countryResponse.currencies ? Object.values(countryResponse.currencies).map(({ name }) => name).join(', ') : 'None';
    this.languages = countryResponse.languages ? Object.values(countryResponse.languages).join(', ') : 'None';
    this.borderCountries = countryResponse.borders ? countryResponse.borders : [];
  }
}
