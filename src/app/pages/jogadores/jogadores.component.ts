import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Jogador {
  id: number;
  foto: string;
  nome: string;
  idade: number;
  posicao: string;
  timeAtual: string;
  salario: number;
  valor: number;
  multa: number;
}

@Component({
  selector: 'app-jogadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jogadores.component.html',
  styleUrl: './jogadores.component.css'
})
export class JogadoresComponent {
  jogadores: Jogador[] = [
    {
      id: 1,
      foto: 'https://via.placeholder.com/50',
      nome: 'Neymar',
      idade: 32,
      posicao: 'Ponta',
      timeAtual: 'PSG',
      salario: 500000,
      valor: 50000000,
      multa: 10000000
    },
    {
      id: 2,
      foto: 'https://via.placeholder.com/50',
      nome: 'Vinicius Jr',
      idade: 24,
      posicao: 'Ponta',
      timeAtual: 'Real Madrid',
      salario: 400000,
      valor: 80000000,
      multa: 15000000
    },
    {
      id: 3,
      foto: 'https://via.placeholder.com/50',
      nome: 'Rodrygo',
      idade: 23,
      posicao: 'Ponta',
      timeAtual: 'Real Madrid',
      salario: 300000,
      valor: 60000000,
      multa: 12000000
    },
    {
      id: 4,
      foto: 'https://via.placeholder.com/50',
      nome: 'Mbappé',
      idade: 25,
      posicao: 'Ponta',
      timeAtual: 'Real Madrid',
      salario: 600000,
      valor: 120000000,
      multa: 25000000
    },
    {
      id: 5,
      foto: 'https://via.placeholder.com/50',
      nome: 'Haaland',
      idade: 24,
      posicao: 'Atacante',
      timeAtual: 'Manchester City',
      salario: 550000,
      valor: 100000000,
      multa: 20000000
    }
  ];

  formatarMoeda(valor: number ): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }
}