import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private apiUrl = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) {}

  obtenerJuegos() {
    return this.http.get(this.apiUrl);
  }
}