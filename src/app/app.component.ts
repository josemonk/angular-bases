import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title:string = 'bases';
 public  counter:number = 3;

 increasyBy(value:number):void {
  if(this.counter > 0)
  this.counter +=value;
 }
 resetCounter():void {
  this.counter = 3;
 }
}
