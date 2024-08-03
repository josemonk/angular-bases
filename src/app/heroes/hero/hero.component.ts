import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name :string = 'Spiderman'
public age :number = 20

get capitalizedName():string {
  return this.name.toUpperCase();
}

getHeroDescription():string {
  return `${this.name}-${this.age}`;
}

changeHero():void{
  this.name = "Hulk";
}

changeAge(){
this.age = 35;
}


}
