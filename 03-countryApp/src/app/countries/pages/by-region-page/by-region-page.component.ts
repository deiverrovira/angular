import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import CountriesService from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  countries : Country[] = [];
  constructor( private countryService: CountriesService) {}


  searchByRegion(country: string): void {

    this.countryService.searchRegion(country).subscribe (

      countries => {
        this.countries = countries;
      }
    );
  }



}
