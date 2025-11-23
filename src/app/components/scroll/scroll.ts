import { Component, ElementRef, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-scroll',
  imports: [ CommonModule],
  templateUrl: './scroll.html',
  styleUrl: './scroll.css'
})
export class Scroll implements OnInit, OnDestroy {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  sections = [
    {
      title: 'Únete a nuestra comunidad y forma parte de algo extraordinario.',
      text: 'Se parte de la comunidad HerySan, según nuestros clientes algo mas que una empresa, una identidad.',
      image: '../image1.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Innovación constante',
      text: 'Nos adaptamos a los cambios y siempre buscamos nuevas formas de mejorar la experiencia de nuestros usuarios.',
      image: '../image2.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Equipo comprometido',
      text: 'Un grupo de profesionales apasionados trabajando juntos para crear soluciones extraordinarias.',
      image: '../image3.jpg',
      imagePosition: 'left'
    },
    {
      title: 'El futuro es ahora',
      text: 'Continuamos evolucionando y preparándonos para los desafíos del mañana con tecnología de vanguardia.',
      image: '../image4.jpg',
      imagePosition: 'right'
    }
  ];

  ngOnInit() {
    // Configurar Intersection Observer para detectar cuando los elementos son visibles
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // El elemento debe estar al menos 10% visible
        rootMargin: '0px 0px -50px 0px' // Comienza la animación un poco antes
      }
    );
  }

  ngAfterViewInit() {
    // Observar todos los elementos animados
    this.animatedElements.forEach(element => {
      this.observer.observe(element.nativeElement);
    });
  }

  ngOnDestroy() {
    // Limpiar el observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
