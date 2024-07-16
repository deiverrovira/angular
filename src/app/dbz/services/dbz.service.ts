import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {

  public characters: Character[] = [
    {
      id : uuid(),
      name: 'Krillin',
      power: 500,
    },
    {
      id : uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id : uuid(),
      name: 'Piccolo',
      power: 4500,
    }
  ];


  onNewCharacter( character: Character ):void {

    character.id = uuid();
    this.characters.push(character);

  }

  // onDeleteCharacter( index: number): void {

  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter( char=> char.id !== id);
  }

  constructor() {}
}
