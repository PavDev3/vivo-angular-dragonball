import { Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { DragonballLayoutComponent } from './layouts/dragonball-layout/dragonball-layout.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';

export const dragonballRoutes: Routes = [
  {
    path: '',
    component: DragonballLayoutComponent,
    children: [
      {
        path: 'characters',
        component: CharacterPageComponent,
      },
      {
        path: 'planets',
        component: PlanetsPageComponent,
      },
      {
        path: '**',
        redirectTo: 'characters',
      },
    ],
  },
];

export default dragonballRoutes;
