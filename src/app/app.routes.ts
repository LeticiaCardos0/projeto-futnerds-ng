import { FinanceiroComponent } from './pages/financeiro/financeiro';
import { TransferenciasComponent } from './pages/financeiro/transferencias/transferencias';
import { OrcamentoComponent } from './pages/financeiro/orcamento/orcamento';
import { ComissaoTecnicaComponent } from './pages/financeiro/comissao-tecnica/comissao-tecnica';
import { RelatoriosComponent } from './pages/financeiro/relatorios/relatorios'
import { CadastroComponent } from './pages/cadastro/cadastro';
import { HomeComponent } from './pages/home/home';
import { JogadoresComponent } from './pages/jogadores/jogadores';
import { TimesComponent } from './pages/times/times';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { TransacoesComponent } from './pages/transacoes/transacoes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jogadores', component: JogadoresComponent },
  { path: 'times', component: TimesComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'comissao-tecnica', component: ComissaoTecnicaComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: '**', redirectTo: '' }
];