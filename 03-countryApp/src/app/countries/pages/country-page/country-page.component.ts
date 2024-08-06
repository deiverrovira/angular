import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CountriesService from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router : Router
  ) {}



  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id } ) =>
          this.countriesService.searchCountryByAlphaCode(id)
        ),
      )
      .subscribe( country => {

        //If the country doesnt exist then take the user outside and redirect to home page
        if ( !country ) return this.router.navigateByUrl('');

        return this.country = country;

      });
  }

}
