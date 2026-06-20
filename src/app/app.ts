import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Topbar } from "./pages/layout/topbar/topbar";
import { Footer } from "./pages/layout/footer/footer";



@Component({
  selector: 'app-root',
  imports: [Topbar, Footer, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-futnerds-ng');
}