import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JogadoresComponent } from '../../jogadores/jogadores.component';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
    constructor( private router: Router){}

    rotaJogador(): void{
      this.router.navigate(['/jogadores']);
    }
}
