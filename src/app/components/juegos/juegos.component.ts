import { Component, ChangeDetectorRef } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego } from '../../models/juego/juego';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  juegos: Juego[] = [];
  busqueda: string = '';

  constructor(
    private juegoService: JuegoService,
    private cdr: ChangeDetectorRef
  ) {

    this.juegoService.obtenerJuegos().subscribe(datos => {
      this.juegos = datos as Juego[];
      this.cdr.detectChanges();
    });
  }

  filtrarJuegos(): Juego[] {
    return this.juegos.filter(juego =>
      juego.title.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}