import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interface'; // Importar la interfaz del juego
import{ToastController} from '@ionic/angular'; // Importar ToastController para mostrar mensajes emergentes

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Game[] = []; // Lista de productos en el carrito

  constructor(private toastController: ToastController) {} // Inyectar ToastController en el constructor

  // Agregar producto al carrito y mostrar mensaje emergente
  agregarProducto(producto: Game) {
    this.carrito.push(producto); 

  }

  // Obtener todos los productos en el carrito
  obtenerProductos(): Game[] {
    return this.carrito; 
  }

  // Eliminar un producto del carrito
  eliminarProducto(juego: Game) {
    this.carrito = this.carrito.filter((item: Game) => item.name !== juego.name);
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.carrito = [];
  }



}