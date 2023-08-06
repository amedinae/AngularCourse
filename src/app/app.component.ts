import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  addComponent(counter: number) {
    console.log(this.numbers);
    this.numbers.push(counter);
  }
}
