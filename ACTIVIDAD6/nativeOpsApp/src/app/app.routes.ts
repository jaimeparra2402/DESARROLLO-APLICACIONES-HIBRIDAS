import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'alta',
    loadComponent: () =>
      import('./features/alta-incidencia/alta-incidencia.page').then(
        (m) => m.AltaIncidenciaPage,
      ),
  },
  {
    path: 'lista',
    loadComponent: () =>
      import('./features/lista-incidencias/lista-incidencias.page').then(
        (m) => m.ListaIncidenciasPage,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
