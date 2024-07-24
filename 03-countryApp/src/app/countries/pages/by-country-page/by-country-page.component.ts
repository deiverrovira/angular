import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'countries-by-country-page',
  template: `<p>by-country-page works!</p>`,
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent { }
