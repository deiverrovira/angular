import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
]
})
export class CountriesModule { }