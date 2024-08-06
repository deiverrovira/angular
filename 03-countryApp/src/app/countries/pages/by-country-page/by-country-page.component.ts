import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import CountriesService from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {

  countries : Country[] = [];
  constructor( private countryService: CountriesService) {}


  searchByCountry(country: string): void {

    this.countryService.searchCountry(country).subscribe (

      countries => {
        this.countries = countries;
      }
    );
  }

 }
