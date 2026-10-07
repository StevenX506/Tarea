import { Component } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego } from '../../models/juego/juego';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  juegos: Juego[] = [];

  constructor(private juegoService: JuegoService) {

    this.juegoService.obtenerJuegos().subscribe(datos => {
      this.juegos = datos as Juego[];
    });

  }
}