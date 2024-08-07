import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
@Input()
  public characterList:Character[]= [{
    id:'',
    name:'trunk',
    power:10
  }]
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index:string | undefined):void {
    if(!index) return;
    console.log(index);
    this.onDeleteId.emit(index);
  }
}
