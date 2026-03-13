import { Routes } from '@angular/router';
import { ReservationsPage } from './reservations.page';

export const routes: Routes = [
  {
    path: '',
    component: ReservationsPage,
  },
  {
    path: 'reserve', 
    loadComponent: () => import('../reserve/reserve.page').then(m => m.ReservePage)
  }
];
