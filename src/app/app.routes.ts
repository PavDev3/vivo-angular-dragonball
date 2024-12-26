import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dragonball',
    loadChildren: () => import('./dragonball/dragonball.routes'),
  },
  {
    path: '**',
    redirectTo: 'dragonball',
  },
];
