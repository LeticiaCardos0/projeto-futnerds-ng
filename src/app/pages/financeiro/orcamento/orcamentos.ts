import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  imports: [CommonModule],
  templateUrl: './orcamentos.html',
  styleUrl: './orcamentos.css',
})
export class OrcamentosComponent {
    modalAberto = false;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
