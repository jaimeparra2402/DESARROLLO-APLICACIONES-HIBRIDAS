import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        loadChildren: () =>
          import('../clients/clients.routes').then((m) => m.routes),
      },
      {
        path: 'reservations',
        loadChildren: () =>
          import('../reservations/reservations.routes').then((m) => m.routes),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/reservations',
        pathMatch: 'full',
      },
    ],
  },
];
