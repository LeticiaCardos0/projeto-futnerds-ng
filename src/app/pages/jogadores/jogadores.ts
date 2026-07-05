import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TimeSelecionado, CHAVE_TIME_SELECIONADO } from '../times/times';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

export interface JogadorElenco {
  id: number;
  foto: string;
  nome: string;
  idade: number;
  posicao: string;
  timeOriginal: string;
  salario: number;
  valor: number;
  multa: number;
}

export const CHAVE_ELENCO = 'futnerds_elenco';

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
  imports: [CommonModule, RouterLink, FormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './jogadores.html',
  styleUrl: './jogadores.css'
})
export class JogadoresComponent implements OnInit {
  jogadores: Jogador[] = [
    { id: 1, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/e_haaland_18d525d6.png', nome: 'E. Haaland', idade: 24, posicao: 'Atacante', timeAtual: 'Manchester City', salario: 550000, valor: 172500000, multa: 34500000 },
    { id: 2, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/k_mbapp_a6fff8a4.png', nome: 'K. Mbappé', idade: 26, posicao: 'Ponta', timeAtual: 'Real Madrid', salario: 500000, valor: 157000000, multa: 31400000 },
    { id: 3, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/vitinha_62b448f1.png', nome: 'Vitinha', idade: 25, posicao: 'Meio-Campo', timeAtual: 'Paris Saint-Germain', salario: 420000, valor: 149000000, multa: 29800000 },
    { id: 4, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/pedri_a88bfe80.png', nome: 'Pedri', idade: 22, posicao: 'Meio-Campo', timeAtual: 'FC Barcelona', salario: 380000, valor: 165000000, multa: 33000000 },
    { id: 5, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/t_courtois_4dff6960.png', nome: 'T. Courtois', idade: 33, posicao: 'Goleiro', timeAtual: 'Real Madrid', salario: 300000, valor: 39000000, multa: 7800000 },
    { id: 6, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/player-images/h_kane_yvw1p4rp.png', nome: 'H. Kane', idade: 31, posicao: 'Atacante', timeAtual: 'FC Bayern München', salario: 480000, valor: 101000000, multa: 20200000 },
    { id: 7, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/o_dembl_f54bdfd5.png', nome: 'O. Dembélé', idade: 28, posicao: 'Ponta', timeAtual: 'Paris Saint-Germain', salario: 410000, valor: 122500000, multa: 24500000 },
    { id: 8, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/rodri_d8867883.png', nome: 'Rodri', idade: 29, posicao: 'Meio-Campo', timeAtual: 'Manchester City', salario: 430000, valor: 88000000, multa: 17600000 },
    { id: 9, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/m_salah_239a2be2.png', nome: 'M. Salah', idade: 33, posicao: 'Ponta', timeAtual: 'Liverpool', salario: 350000, valor: 64000000, multa: 12800000 },
    { id: 10, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/gabriel_2e790224.png', nome: 'Gabriel Magalhães', idade: 27, posicao: 'Zagueiro', timeAtual: 'Arsenal', salario: 320000, valor: 104000000, multa: 20800000 },
    { id: 11, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/f_valverde_e06132c0.png', nome: 'F. Valverde', idade: 26, posicao: 'Meio-Campo', timeAtual: 'Real Madrid', salario: 400000, valor: 120500000, multa: 24100000 },
    { id: 12, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/player-images/a_hakimi_8lmu3w65.png', nome: 'A. Hakimi', idade: 26, posicao: 'Lateral', timeAtual: 'Paris Saint-Germain', salario: 360000, valor: 111000000, multa: 22200000 },
    { id: 13, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/g_donnarumma_099ac8ec.png', nome: 'G. Donnarumma', idade: 26, posicao: 'Goleiro', timeAtual: 'Paris Saint-Germain', salario: 330000, valor: 97000000, multa: 19400000 },
    { id: 14, foto: 'https://cdn-img.staticzz.com/img/jogadores/new/75/32/737532_jude_bellingham_20250618231333.png', nome: 'J. Bellingham', idade: 22, posicao: 'Meio-Campo', timeAtual: 'Real Madrid', salario: 390000, valor: 150500000, multa: 30100000 },
    { id: 15, foto: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663216916845/hhB4oykfDQM9yCvhQGaX3n/vini_jr_25114c31.png', nome: 'Vini Jr.', idade: 24, posicao: 'Ponta', timeAtual: 'Real Madrid', salario: 440000, valor: 141000000, multa: 28200000 },
    { id: 16, foto: 'https://images.fifaindex.com/fc26/players/277643.webp', nome: 'Lamine Yamal', idade: 17, posicao: 'Ponta', timeAtual: 'FC Barcelona', salario: 180000, valor: 147000000, multa: 29400000 },
    { id: 17, foto: 'https://images.fifaindex.com/fc26/players/256790.webp', nome: 'J. Musiala', idade: 22, posicao: 'Meio-Campo', timeAtual: 'FC Bayern München', salario: 380000, valor: 133500000, multa: 26700000 },
    { id: 18, foto: 'https://images.fifaindex.com/fc26/players/246669.webp', nome: 'B. Saka', idade: 23, posicao: 'Ponta', timeAtual: 'Arsenal', salario: 400000, valor: 103500000, multa: 20700000 },
    { id: 19, foto: 'https://images.fifaindex.com/fc26/players/241084.webp', nome: 'L. Díaz', idade: 28, posicao: 'Ponta', timeAtual: 'Liverpool', salario: 350000, valor: 80000000, multa: 16000000 },
    { id: 20, foto: 'https://images.fifaindex.com/fc26/players/237383.webp', nome: 'A. Bastoni', idade: 26, posicao: 'Zagueiro', timeAtual: 'Inter de Milão', salario: 320000, valor: 87000000, multa: 17400000 },
    { id: 21, foto: 'https://images.fifaindex.com/fc26/players/247635.webp', nome: 'K. Kvaratskhelia', idade: 24, posicao: 'Ponta', timeAtual: 'Napoli', salario: 380000, valor: 109000000, multa: 21800000 },
    { id: 22, foto: 'https://images.fifaindex.com/fc26/players/256630.webp', nome: 'F. Wirtz', idade: 22, posicao: 'Meio-Campo', timeAtual: 'B. Leverkusen', salario: 360000, valor: 116500000, multa: 23300000 },
    { id: 23, foto: 'https://images.fifaindex.com/fc26/players/222665.webp', nome: 'M. Ødegaard', idade: 26, posicao: 'Meio-Campo', timeAtual: 'Arsenal', salario: 390000, valor: 110000000, multa: 22000000 },
    { id: 24, foto: 'https://images.fifaindex.com/fc26/players/203376.webp', nome: 'V. van Dijk', idade: 33, posicao: 'Zagueiro', timeAtual: 'Liverpool', salario: 400000, valor: 43500000, multa: 8700000 },
    { id: 25, foto: 'https://images.fifaindex.com/fc26/players/212831.webp', nome: 'Alisson', idade: 32, posicao: 'Goleiro', timeAtual: 'Liverpool', salario: 300000, valor: 45000000, multa: 9000000 },
    { id: 26, foto: 'https://images.fifaindex.com/fc26/players/212622.webp', nome: 'J. Kimmich', idade: 30, posicao: 'Meio-Campo', timeAtual: 'FC Bayern München', salario: 380000, valor: 86000000, multa: 17200000 },
    { id: 27, foto: 'https://images.fifaindex.com/fc26/players/212198.webp', nome: 'B. Fernandes', idade: 30, posicao: 'Meio-Campo', timeAtual: 'Manchester United', salario: 390000, valor: 88000000, multa: 17600000 },
    { id: 28, foto: 'https://images.fifaindex.com/fc26/players/233419.webp', nome: 'Raphinha', idade: 28, posicao: 'Ponta', timeAtual: 'FC Barcelona', salario: 350000, valor: 104000000, multa: 20800000 },
    { id: 29, foto: 'https://images.fifaindex.com/fc26/players/231478.webp', nome: 'L. Martínez', idade: 27, posicao: 'Atacante', timeAtual: 'Inter de Milão', salario: 420000, valor: 99000000, multa: 19800000 },
    { id: 30, foto: 'https://images.fifaindex.com/fc26/players/224232.webp', nome: 'N. Barella', idade: 28, posicao: 'Meio-Campo', timeAtual: 'Inter de Milão', salario: 380000, valor: 91500000, multa: 18300000 },
    { id: 31, foto: 'https://images.fifaindex.com/fc26/players/234378.webp', nome: 'D. Rice', idade: 26, posicao: 'Meio-Campo', timeAtual: 'Arsenal', salario: 400000, valor: 96000000, multa: 19200000 },
    { id: 32, foto: 'https://images.fifaindex.com/fc26/players/256079.webp', nome: 'M. Caicedo', idade: 23, posicao: 'Meio-Campo', timeAtual: 'Chelsea', salario: 350000, valor: 107000000, multa: 21400000 },
    { id: 33, foto: 'https://images.fifaindex.com/fc26/players/252145.webp', nome: 'Nuno Mendes', idade: 23, posicao: 'Lateral', timeAtual: 'Paris Saint-Germain', salario: 320000, valor: 115500000, multa: 23100000 },
    { id: 34, foto: 'https://images.fifaindex.com/fc26/players/233731.webp', nome: 'A. Isak', idade: 25, posicao: 'Atacante', timeAtual: 'Newcastle United', salario: 350000, valor: 96500000, multa: 19300000 },
    { id: 35, foto: 'https://images.fifaindex.com/fc26/players/232293.webp', nome: 'V. Osimhen', idade: 26, posicao: 'Atacante', timeAtual: 'Galatasaray SK', salario: 400000, valor: 95000000, multa: 19000000 },
    { id: 36, foto: 'https://images.fifaindex.com/fc26/players/220901.webp', nome: 'David Raya', idade: 29, posicao: 'Goleiro', timeAtual: 'Arsenal', salario: 280000, valor: 54500000, multa: 10900000 },
    { id: 37, foto: 'https://images.fifaindex.com/fc26/players/215698.webp', nome: 'M. Maignan', idade: 29, posicao: 'Goleiro', timeAtual: 'AC Milan', salario: 300000, valor: 61000000, multa: 12200000 },
    { id: 38, foto: 'https://images.fifaindex.com/fc26/players/213331.webp', nome: 'J. Tah', idade: 29, posicao: 'Zagueiro', timeAtual: 'B. Leverkusen', salario: 320000, valor: 66500000, multa: 13300000 },
    { id: 39, foto: 'https://images.fifaindex.com/fc26/players/239837.webp', nome: 'A. Mac Allister', idade: 26, posicao: 'Meio-Campo', timeAtual: 'Liverpool', salario: 380000, valor: 105000000, multa: 21000000 }
  ];

  timeSelecionado: TimeSelecionado | null = null;
  mostrarModalAdicionar: boolean = false;
  jogadorParaAdicionar: JogadorElenco | null = null;

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.carregarTimeSelecionado();
  }

  private carregarTimeSelecionado(): void {
    const dados = localStorage.getItem(CHAVE_TIME_SELECIONADO);
    this.timeSelecionado = dados ? JSON.parse(dados) : null;
  }

  private carregarElenco(): JogadorElenco[] {
    const dados = localStorage.getItem(CHAVE_ELENCO);
    return dados ? JSON.parse(dados) : [];
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  formatarSalarioInput(event: any): void {
    if (this.jogadorParaAdicionar) {
      let valor = event.target.value.replace(/\D/g, '');
      if (valor) {
        const numeroFormatado = parseInt(valor, 10);
        this.jogadorParaAdicionar.salario = numeroFormatado;
        event.target.value = this.formatarNumeroComPonto(numeroFormatado);
      }
    }
  }

  formatarNumeroComPonto(valor: number): string {
    return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  obterValorFormatado(valor: number): string {
    return this.formatarNumeroComPonto(valor);
  }

  abrirModalAdicionar(jogador: Jogador) {
    this.carregarTimeSelecionado();

    if (!this.timeSelecionado) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Nenhum time selecionado',
        detail: 'Selecione um time primeiro para montar seu elenco.'
      });
      this.router.navigate(['/times']);
      return;
    }

    this.jogadorParaAdicionar = {
      id: jogador.id,
      foto: jogador.foto,
      nome: jogador.nome,
      idade: jogador.idade,
      posicao: jogador.posicao,
      timeOriginal: jogador.timeAtual,
      salario: jogador.salario,
      valor: jogador.valor,
      multa: jogador.multa
    };
    this.mostrarModalAdicionar = true;
  }

  fecharModalAdicionar() {
    this.mostrarModalAdicionar = false;
    this.jogadorParaAdicionar = null;
  }

  adicionarJogadorAoElenco() {
    if (this.jogadorParaAdicionar && this.timeSelecionado) {
      const elenco = this.carregarElenco();

      const jaExiste = elenco.some(j => j.id === this.jogadorParaAdicionar!.id);

      if (jaExiste) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Jogador já está no elenco',
          detail: `${this.jogadorParaAdicionar.nome} já faz parte do seu elenco.`
        });
        this.fecharModalAdicionar();
        return;
      }

      elenco.push(this.jogadorParaAdicionar);
      localStorage.setItem(CHAVE_ELENCO, JSON.stringify(elenco));

      this.messageService.add({
        severity: 'success',
        summary: 'Jogador adicionado',
        detail: `${this.jogadorParaAdicionar.nome} foi adicionado ao elenco do ${this.timeSelecionado.nome}.`
      });

      this.fecharModalAdicionar();
    }
  }
}