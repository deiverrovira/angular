import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html'
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url)
    throw new Error('URL is required');
  }

  @Input() public url!:string;


  @Input() public alt:string = '';

  hasLoaded:boolean = false;


  onLoad() {

    setTimeout( () => {
      this.hasLoaded = true
    }, 500);

    console.log('Has loaded');

  };

 }
