import { Component } from '@angular/core'; //le quito el import de OnInit porque no lo estoy usando
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonImg, IonFooter, IonIcon, IonCard } from '@ionic/angular/standalone';

// Importar el servicio de carrito y la interfaz del juego
import { CarritoService } from '../servicios/carrito.service'; // Importar el servicio de carrito
import { Game } from '../interfaces/game.interface'; // Importar la interfaz del juego

// Importar componentes de Ionic, para el header y footer
import { HeaderComponent } from '../components/header/header.component';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.page.html',
  styleUrls: ['./pagina-carrito.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCard, IonButton, IonLabel, IonItem, IonList, IonContent, IonHeader, CommonModule, FormsModule, HeaderComponent]
  // Importar los componentes de Ionic y los componentes personalizados, Header y Footer
 // Importar los componentes de Ionic y los componentes personalizados, Header y Footer
})

export class PaginaCarritoPage {


  juegosEnCarrito: Game[] = []; // Lista de productos en el carrito

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.juegosEnCarrito = this.carritoService.obtenerProductos(); // Obtener los productos del carrito al iniciar la página
  }

  eliminarDelCarrito(juego: Game) {
   this.carritoService.eliminarProducto(juego); // Eliminar el juego del carrito
   this.juegosEnCarrito = this.carritoService.obtenerProductos(); // Actualizar la lista del carrito
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito(); // Vaciar el carrito
    this.juegosEnCarrito = []; // Limpiar la lista del carrito
  }

}