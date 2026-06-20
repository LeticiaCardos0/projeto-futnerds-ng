import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transacoes',
  imports: [CommonModule],
  templateUrl: './transacoes.html',
  styleUrl: './transacoes.css',
})
export class TransacoesComponent {
[x: string]: any;
filteredTransactions: any;
}
