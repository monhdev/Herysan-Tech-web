import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { Carousel } from '../components/carousel/carousel';
import { Scroll } from '../components/scroll/scroll';
import { Software } from '../components/software/software';
import { Hardware } from '../components/hardware/hardware';
import { Inicio } from '../components/inicio/inicio';

@Component({
  selector: 'app-home',
  imports: [ Inicio, Hardware,Software, Scroll, Carousel, RouterLink, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  selectedComponent: string = 'component6';

  components = [
    { value: 'component1', label: 'Hardware' },
    { value: 'component2', label: 'Software' },
    { value: 'component3', label: 'Carousel' },
    { value: 'component5', label: 'Scroll' },
    { value: 'component6', label: 'Inicio' }
  ];

  onComponentChange(value: string): void {
    this.selectedComponent = value;
    console.log('Componente seleccionado:', value);
  }


}


