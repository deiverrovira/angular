import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export default class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      //Handle error here
      catchError((error) => {
        return of([]);
      })
    );
  }


  searchCountry(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      //Handle error here
      catchError((error) => {
        return of([]);
      })
    );
  }


  searchRegion(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      //Handle error here
      catchError((error) => {
        return of([]);
      })
    );
  }



  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),

      //Handle error here
      catchError((error) => {
        return of(null);
      })
    );
  }


}
