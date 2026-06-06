import { Routes } from '@angular/router';

export const routes: Routes = [

  // Home
  {
    path: 'elenco',
    loadComponent: () =>
      import('./pages/times/time-novo.component')
        .then(m => m.TimesComponent)
  },

  // Jogadores
  {
    path: 'jogadores',
    loadComponent: () =>
      import('./pages/jogadores/jogadores.component')
        .then(m => m.JogadoresComponent)
  }
]