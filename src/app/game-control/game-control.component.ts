import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output('onCounterIncrement') counterListener = new EventEmitter<number>();
  private counter: number;
  private intervalId: ReturnType<typeof setInterval>;

  constructor() {
    this.counter = 0;
  }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.counter++;
      this.counterListener.emit(this.counter);
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }
}
