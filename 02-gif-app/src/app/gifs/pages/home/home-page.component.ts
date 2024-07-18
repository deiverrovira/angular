import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifService } from '../../services/gif-service.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

constructor(private gifService: GifService) {}

gifsList: Gif[] = [];

get gifs():Gif[] {
  return this.gifService.gifList;
}


}
