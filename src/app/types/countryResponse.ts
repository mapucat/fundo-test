export interface CountryResponse {
  flags: {
    alt: string;
    png: string;
  }
  population: string;
  region: string;
  subregion: string;
  capital?: string[];
  name: {
    common: string;
    nativeName?: {
      [x: string]: {
        official: string;
        common: string;
      };
    };
  },
  tld?: string[];
  currencies: {
    [x: string]: {
      name: string;
      symbol: string;
    }
  },
  languages?: {
    [x: string]: string;
  },
  borders?: string[];
};
