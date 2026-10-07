import { Routes } from '@angular/router';
import { JuegosComponent } from './components/juegos/juegos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent }
];