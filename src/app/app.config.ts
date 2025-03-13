import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Importa provideRouter
import { routes } from './app.routes'; // Importa las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configura Zone.js
    provideRouter(routes) // Configura el enrutamiento con las rutas definidas
  ]
};