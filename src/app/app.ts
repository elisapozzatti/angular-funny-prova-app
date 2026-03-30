import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game';
import { JokeComponent } from './joke/joke';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, GameComponent, JokeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  view: string = 'game';
}
