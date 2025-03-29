import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core'; //Se agrega Output y EventEmitter para emitir eventos
import { CarritoService } from 'src/app/servicios/carrito.service';

import { Game } from 'src/app/interfaces/game.interface'; // Importar la interfaz del juego
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})

export class GameCardComponent {
  @Input() game: any; // Propiedad que se usa para recibir el juego

  @Output() agregarAlCarrito = new EventEmitter<Game>(); // Evento para emitir el juego al componente padre


  // Constructor para inyectar el servicio de carrito
  constructor(private carritoService: CarritoService) { }


  // Método para agregar un producto al carrito, cuando se hace clic en el botón "Agregar al carrito"
  onAgregarAlCarrito() {
    this.carritoService.agregarProducto(this.game); // Agrega el juego al carrito
  }
}