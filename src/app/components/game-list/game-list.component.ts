import { Component } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";
import { CommonModule } from '@angular/common';
import { IonContent } from "@ionic/angular/standalone";

// Importar la interfaz del juego
import { Game } from 'src/app/interfaces/game.interface';

// Importar el servicio de alerta
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  imports: [IonContent, GameCardComponent,CommonModule,]
})
export class GameListComponent {
  games = [
    { name: 'MordHold', price: 29.99, year: 2018, image: 'assets/img/juego1.jpg' },
    { name: 'The Sims 4', price: 39.99, year: 2018, image: 'assets/img/juego2.jpg' },
    { name: 'Split Fiction', price: 49.99, year: 2018, image: 'assets/img/juego3.jpg' },
    { name: 'Doom: Dark Ages', price: 29.99, year: 2018, image: 'assets/img/juego4.jpg' },
    { name: 'Assassins Creed', price: 39.99, year: 2018, image: 'assets/img/juego5.jpg' },
    { name: 'Minecraft', price: 49.99, year: 2018, image: 'assets/img/juego6.jpg' },
    { name: 'Grand Theft Auto', price: 29.99, year: 2018, image: 'assets/img/juego7.jpg' },
    { name: 'Red Dead Redemption 2', price: 39.99, year: 2018, image: 'assets/img/juego8.jpg' },
    { name: 'Kovaaks', price: 49.99, year: 2018, image: 'assets/img/juego9.jpg' },
    { name: 'Yasha: Legends of the Demon ', price: 29.99, year: 2018, image: 'assets/img/juego10.jpg' },
    { name: 'Final Fantasy VII', price: 39.99, year: 2018, image: 'assets/img/juego11.jpg' },
    { name: 'AtomFall', price: 49.99, year: 2018, image: 'assets/img/juego12.jpg' },
    
    
    
  ];

  carrito: Game[] = []; // Lista de productos en el carrito

  constructor(private alertController: AlertController) {} // Inyectar AlertController en el constructor

  // Método para mostrar la alerta de confirmación


  async agregarAlCarrito(game: Game) {
    this.carrito.push(game); // Agregar el juego al carrito
  }

}


