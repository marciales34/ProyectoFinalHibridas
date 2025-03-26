import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true, // Necesario si no tienes app.module.ts
  imports: [IonicModule, CommonModule], // Importa módulos para Ionic
})
export class HeaderComponent {}

