import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { JogadoresComponent } from './pages/jogadores/jogadores';
import { TimesComponent } from './pages/times/times';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jogadores', component: JogadoresComponent },
  { path: 'times', component: TimesComponent },

  // { path: 'elenco', loadComponent: () => import('./pages/elenco/elenco').then(x => x.ElencoComponent) },
  // { path: 'transferencias', loadComponent: () => import('./pages/financeiro/transferencias/transferencias').then(x => x.TransferenciasComponent) },
  // { path: 'orcamento', loadComponent: () => import('./pages/financeiro/orcamento/orcamento').then(x => x.OrcamentoComponent) },
  // { path: 'comissao-tecnica', loadComponent: () => import('./pages/financeiro/comissao-tecnica/comissao-tecnica').then(x => x.ComissaoTecnicaComponent) },
  // { path: 'patrocinios', loadComponent: () => import('./pages/financeiro/patrocinios/patrocinios').then(x => x.PatrociniosComponent) },
  // { path: 'relatorios-financeiros', loadComponent: () => import('./pages/financeiro/relatorios-financeiros/relatorios-financeiros').then(x => x.RelatoriosFinanceirosComponent) },
];