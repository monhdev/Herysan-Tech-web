import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Carousel } from './components/carousel/carousel';
import { Scroll } from './components/scroll/scroll'
import { Software } from './components/software/software';
import { Hardware } from './components/hardware/hardware';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [

  { path: '', component: Home },  // Ruta por defecto

  { path: 'carousel', component: Carousel},

  { path: 'scroll', component: Scroll},

  { path: 'software', component: Software},

  { path: 'hardware', component: Hardware},

  { path: 'inicio', component: Inicio},

  { path: '**', redirectTo: '' }  // Ruta wildcard para páginas no encontradas


];
