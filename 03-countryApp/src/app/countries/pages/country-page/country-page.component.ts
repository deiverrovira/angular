import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'countries-country-page',
  template: `<p>country-page works!</p>`,
  styleUrl: './country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent { }
