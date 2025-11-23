import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-hardware',
  imports: [ CommonModule],
  templateUrl: './hardware.html',
  styleUrl: './hardware.css'
})
export class Hardware {

  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

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

