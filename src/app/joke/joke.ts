import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke',
  standalone: true,
  templateUrl: './joke.html',
  styleUrls: ['./joke.css'],
  imports: [CommonModule],
})
export class JokeComponent {
  jokes = [
    'Why do programmers hate nature? Too many bugs 🐛',
    'Why did Angular break up with jQuery? It found someone more reactive 😎',
    "Why do Java developers wear glasses? Because they don't see sharp 🤓",
  ];

  currentJoke = '';

  getJoke() {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    this.currentJoke = this.jokes[randomIndex];
  }
}
