import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";
import { GameListComponent } from "../components/game-list/game-list.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, HeaderComponent, GameListComponent, FooterComponent],
})
export class HomePage {
  constructor() {}
}
