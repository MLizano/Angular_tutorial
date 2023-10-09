import { Component } from "@angular/core";

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`
  }

  changeName():void{
    this.name = 'batman';
  }

  changeAge():void{
    this.age = 56;
  }

  reset():void{
    this.age = 45;
    this.name = 'ironman';
  }

}
