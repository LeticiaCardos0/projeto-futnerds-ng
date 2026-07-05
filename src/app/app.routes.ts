import { FinanceiroComponent } from './pages/financeiro/financeiro';
import { OrcamentosComponent } from './pages/financeiro/orcamento/orcamentos';
import { ComissaoTecnicaComponent } from './pages/financeiro/comissao-tecnica/comissao-tecnica';
import { RelatoriosComponent } from './pages/financeiro/relatorios/relatorios'
import { CadastroComponent } from './pages/cadastro/cadastro';
import { HomeComponent } from './pages/home/home';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/cadastro/login/login';
import { TransacoesComponent } from './pages/financeiro/transacoes/transacoes';
import { RedefinirSenha } from './pages/cadastro/redefinir-senha/redefinir-senha';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'redefinir-senha', component: RedefinirSenha },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'orcamentos', component: OrcamentosComponent },
  { path: 'comissao-tecnica', component: ComissaoTecnicaComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: '**', redirectTo: '' }
];