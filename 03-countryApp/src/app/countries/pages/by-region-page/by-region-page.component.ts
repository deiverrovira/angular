import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'countries-by-region-page',
  template: `<p>by-region-page works!</p>`,
  styleUrl: './by-region-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent { }
