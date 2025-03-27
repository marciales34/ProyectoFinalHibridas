import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule, RouterModule], // Agrega RouterModule
})
export class HeaderComponent {
  constructor(private navCtrl: NavController) {} // ✅ Inyecta NavController

  redirigirALogin() {
    this.navCtrl.navigateForward('/login'); // ✅ Usa navigateForward en vez de navigateByUrl
  }
}

