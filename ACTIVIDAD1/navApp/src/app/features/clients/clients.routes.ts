import { Routes } from '@angular/router';
import { ClientsPage } from './clients.page';

export const routes: Routes = [
  {
    path: '',
    component: ClientsPage,
  },
  {
    path: ':id', 
    loadComponent: () => import('../client/client.page').then(m => m.ClientPage)
  }
];

