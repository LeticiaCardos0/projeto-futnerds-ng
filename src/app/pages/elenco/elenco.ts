import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SquadService, TimeSelecionado, JogadorElenco } from '../../services/squad.service';

@Component({
  selector: 'app-elenco',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css'
})
export class ElencoComponent implements OnInit {
  timeSelecionado: TimeSelecionado | null = null;
  elenco: JogadorElenco[] = [];
  totalGastos: number = 0;

  constructor(private squadService: SquadService) {}

  ngOnInit() {
    this.squadService.timeSelecionado$.subscribe(time => {
      this.timeSelecionado = time;
    });

    this.squadService.elenco$.subscribe(elenco => {
      this.elenco = elenco;
      this.calcularTotalGastos();
    });
  }

  calcularTotalGastos() {
    this.totalGastos = this.elenco.reduce((total, jogador) => total + jogador.salario, 0);
  }

  removerJogador(jogadorId: number) {
    this.squadService.removerDoElenco(jogadorId);
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  limparElenco() {
    if (confirm('Tem certeza que deseja limpar todo o elenco e o time selecionado?')) {
      this.squadService.limparTudo();
    }
  }
}
