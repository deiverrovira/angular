import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
@Input()
placeholder:string = '';


@Output() onValueEmmiter = new EventEmitter<string>();


emitValue(searchText: string) {
  this.onValueEmmiter.emit(searchText);
}



}
