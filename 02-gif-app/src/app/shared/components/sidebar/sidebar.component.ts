import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gif-service.service';
import { Gif } from '../../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}

  get tags() {
    return [...this.gifService.tagsHistory];
  }

  searchTags(tag:string):Gif[] {
    this.gifService.searchTag(tag);

    return [...this.gifService.gifList];
  }


}
