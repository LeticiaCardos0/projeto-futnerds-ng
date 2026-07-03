import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transacoes',
  imports: [CommonModule, FormsModule],
  templateUrl: './transacoes.html',
  styleUrl: './transacoes.css',
})
export class TransacoesComponent {
  [x: string]: any;
  filteredTransactions: any;

  tipos: string[] = [`Receita`, `Despesa`] ;
  categorias: string[] = [`Venda`, `Compra`] ;
  descricoes: string[] = [`Comprei jogador tal`, `Vendi jogador tal`] ;
  datas: string[] = [`03/07/2026`, `11/02/2005`] ;
  valores: number[] = [1000 , 2000];


  tipo: string = ""
  categoria: string = "";
  descricao: string = "";
  data: string = "";
  valor: number = 0;


  indiceParaEditar: number = -1;

  tipoAlterado(event: Event) {
    const valor = (event.target as HTMLSelectElement).value;
    console.log(valor);
  }

  salvar(): void {

    if (this.tipo.trim() === "") {
      alert('Selecione o Tipo da Transação');
      return;
    }

    if (this.categoria.trim() === "") {
      alert('Selecione o Categoria da Transação');
      return;
    }
    if (this.descricao.trim() === "") {
      alert('Inclua uma descrição para essa transação');
      return;
    }
    if (this.valor === null) {
      alert('Informe qual o valor da Transação');
      return;
    }
    if (this.data === null) {
      alert('Informe a data que a Transação foi realizada');
      return;
    }

    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.tipo = ""
    this.categoria = "";
    this.descricao = "";
    this.data = "";
    this.valor = 0;
  }

  cadastrar() {
    this.tipos.push(this.tipo);
    this.categorias.push(this.categoria);
    this.descricoes.push(this.descricao);
    this.datas.push(this.data);
    this.valores.push(this.valor);

      
    alert('Transação cadastrada com sucesso');
  }

  editar() {
    this
    


  }
}
