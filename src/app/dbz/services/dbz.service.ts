

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import  { v4 as uuid } from 'uuid'



@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id:uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9000,
    },
    {
      id:uuid(),

      name: 'Vegeta',
      power: 9000,
    },
    {
      id:uuid(),
      name: 'Babidi',
      power: 9000,
    },
  ];

  addCharacter(character:Character):void {
    const newCharacter : Character = {id:uuid(), ...character};
    this.characters.push(character);
  }

  // onDeleteCharacter(index:number):void{
  //   console.log({index});
  //  const slice =  this.characters.splice(index,1);

  //  console.log({slice})
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !==id);
    console.log(this.characters);
  }


}

