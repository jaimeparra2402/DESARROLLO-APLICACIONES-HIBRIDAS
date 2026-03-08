import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then( m => m.LoginPage)
  },

  {
    path: 'tabs',
    loadComponent: () => import('./features/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'clients',
        loadComponent: () => import('./features/clients/clients.page').then(m => m.ClientsPage),
      },
      {
        path: 'reservations', 
        loadComponent: () => import('./features/reservations/reservations.page').then(m => m.ReservationsPage),
      },
      {
        path: 'products',
        loadComponent: () => import('./features/products/products.page').then(m => m.ProductsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/reservations', 
        pathMatch: 'full',
      },
    ],
  },

   {
    path: 'client/:id',
    loadComponent: () => import('./features/client/client.page').then( m => m.ClientPage)
  },

  {
    path: 'reserve',
    loadComponent: () => import('./features/reserve/reserve.page').then( m => m.ReservePage)
  },

  {
    path: '',
    redirectTo: 'tabs/reservations',
    pathMatch: 'full',
  },
];