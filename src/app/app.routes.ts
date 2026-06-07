import { Routes } from '@angular/router';

export const routes: Routes = [

  // // Jogadores
    {path: "jogadores", loadComponent: () => import('./pages/jogadores/jogadores').then(x => x.JogadoresComponent)},


  // {
  //   path: 'jogadores',
  //   loadComponent: () =>
  //     import('./pages/jogadores/jogadores')
  //       .then(m => m.JogadoresComponent)
  // }
]