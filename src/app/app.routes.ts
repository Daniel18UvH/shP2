import { Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component'; // Importa el componente

export const routes: Routes = [
  { path: 'acerca-de', component: AcercaDeComponent }, // Ruta para "Acerca de..."
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
];