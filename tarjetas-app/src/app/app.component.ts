import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [
     CreateCardComponent, 
     CardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarjetas-app';
}
