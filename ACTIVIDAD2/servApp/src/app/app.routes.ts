import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./features/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./features/favorites/favorites.page').then( m => m.FavoritesPage)
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
