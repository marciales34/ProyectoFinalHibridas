import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: "login", component: LoginComponent },
 
  {
    path: 'pagina-carrito',
    loadComponent: () => import('./pagina-carrito/pagina-carrito.page').then( m => m.PaginaCarritoPage)
  },
  {
    path: 'pagina-carrito',
    loadComponent: () => import('./pagina-carrito/pagina-carrito.page').then( m => m.PaginaCarritoPage)
  },



];