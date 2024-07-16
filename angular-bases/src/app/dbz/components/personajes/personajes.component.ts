import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  @Output() public onDeleteCharacterOutput: EventEmitter<string> =
    new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 200,
    },
    {
      name: 'Gohan',
      power: 300,
    },
  ];

  public onDeleteId(id?: string) {
    if (!id) return;
    this.onDeleteCharacterOutput.emit(id);
  }
}
