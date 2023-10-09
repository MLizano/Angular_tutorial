import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy()"> +1 </button>
    <button (click)="reset()" style="margin-left: 15px;"> Reset </button>
    <button (click)="decreaseBy()" style="margin-left: 15px;"> -1 </button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy():void {
    this.counter +=1;
  }

  decreaseBy():void {
    if (this.counter != 0) {
      this.counter -=1;
    }
  }

  reset(): void {
    this.counter = 0;
  }
}
