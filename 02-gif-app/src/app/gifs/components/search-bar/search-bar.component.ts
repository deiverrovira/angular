import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif-service.service';

@Component({
  selector: 'gifs-search-bar',
  template: `
    <h5>Search</h5>
    <input
      type="text"
      placeholder="Search gif..."
      class="form-control"
      (keyup.enter)="search(txtTagInput.value)"
      #txtTagInput
    />
  `,
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  constructor(private giftService: GifService) {}


  @ViewChild('txtTagInput') searchTagInput!: ElementRef<HTMLInputElement>;

  public search(criteria: string): void {
    const newTag = this.searchTagInput.nativeElement.value;
    console.log(newTag);
    this.giftService.searchTag(newTag);
    this.searchTagInput.nativeElement.value = '';
  }
}
