import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.html',
  styleUrls: ['./game.css'],
  imports: [CommonModule],
})
export class GameComponent {
  score = 0;
  timeLeft = 10;
  gameActive = false;

  startGame() {
    this.score = 0;
    this.timeLeft = 10;
    this.gameActive = true;

    const timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        clearInterval(timer);
        this.gameActive = false;
      }
    }, 1000);
  }
  clickTarget() {
    if (this.gameActive) {
      this.score++;
    }
  }
}
