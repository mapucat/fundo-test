import { Component, Input } from '@angular/core';
import { CountryCard } from 'src/app/types/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  @Input() country: CountryCard | null = null;

}
