import { Component, signal } from '@angular/core';
import { Topbar } from "./pages/layout/topbar/topbar";
import { Footer } from "./pages/layout/footer/footer";
import { Home } from "./pages/home/home";


@Component({
  selector: 'app-root',
  imports: [Topbar, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-futnerds-ng');
}
