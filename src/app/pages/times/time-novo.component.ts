import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Time {
  id: number;
  logo: string;
  nome: string;
  pais: string;
  liga: string;
  orcamento: number;
}

@Component({
  selector: 'app-times',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-novo.component.html',
  styleUrl: './time-novo.component.css'
})
export class TimesComponent {
  times: Time[] = [
    {
      id: 1,
      logo: 'https://via.placeholder.com/50',
      nome: 'Real Madrid',
      pais: 'Espanha',
      liga: 'La Liga',
      orcamento: 620000000
    },
    {
      id: 2,
      logo: 'https://via.placeholder.com/50',
      nome: 'Manchester City',
      pais: 'Inglaterra',
      liga: 'Premier League',
      orcamento: 580000000
    },
    {
      id: 3,
      logo: 'https://via.placeholder.com/50',
      nome: 'PSG',
      pais: 'França',
      liga: 'Ligue 1',
      orcamento: 550000000
    },
    {
      id: 4,
      logo: 'https://via.placeholder.com/50',
      nome: 'Bayern Munich',
      pais: 'Alemanha',
      liga: 'Bundesliga',
      orcamento: 500000000
    },
    {
      id: 5,
      logo: 'https://via.placeholder.com/50',
      nome: 'Liverpool',
      pais: 'Inglaterra',
      liga: 'Premier League',
      orcamento: 480000000
    },
    {
      id: 6,
      logo: 'https://via.placeholder.com/50',
      nome: 'Inter de Milão',
      pais: 'Itália',
      liga: 'Serie A',
      orcamento: 420000000
    },
    {
      id: 7,
      logo: 'https://via.placeholder.com/50',
      nome: 'Barcelona',
      pais: 'Espanha',
      liga: 'La Liga',
      orcamento: 380000000
    },
    {
      id: 8,
      logo: 'https://via.placeholder.com/50',
      nome: 'Corinthians',
      pais: 'Brasil',
      liga: 'Brasileirão',
      orcamento: -20000000
    }
  ];

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }
}