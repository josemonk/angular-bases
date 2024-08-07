import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <span> Conunter:{{ counter }} </span>
    <button (click)="increasyBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increasyBy(-1)">-1</button>`,
})
export class CounterComponent {
  public counter: number = 3;


  increasyBy(value: number): void {
    if (this.counter > 0) this.counter += value;
  }
  resetCounter(): void {
    this.counter = 3;
  }
}
