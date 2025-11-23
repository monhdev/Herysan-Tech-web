import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImageData {
  src: string;
  alt: string;
  title: string;
}
@Component({
  selector: 'app-carousel',
  imports: [ CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  images: ImageData[] = [
    {
      src: 'assets/image1.jpg',
      alt: 'Imagen 1',
      title: 'Equipo especializado en hadware'
    },
    {
      src: 'assets/image2.jpg',
      alt: 'Imagen 2',
      title: 'Creación de software personalizado'
    },
    {
      src: 'assets/image3.jpg',
      alt: 'Imagen 3',
      title: 'Tu PC totalmente customizado'
    },
    {
      src: 'assets/image4.jpg',
      alt: 'Imagen 4',
      title: 'apps personalizadas'
    }
  ];

  currentIndex = signal(0);
  showModal = signal(false);
  selectedImage = signal<ImageData | null>(null);

  nextSlide() {
    this.currentIndex.update(index =>
      index === this.images.length - 1 ? 0 : index + 1
    );
  }

  prevSlide() {
    this.currentIndex.update(index =>
      index === 0 ? this.images.length - 1 : index - 1
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  openModal(image: ImageData) {
    this.selectedImage.set(image);
    this.showModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal.set(false);
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }

  // Obtener índice previo (con wrap-around)
  getPrevIndex(): number {
    return this.currentIndex() === 0 ? this.images.length - 1 : this.currentIndex() - 1;
  }

  // Obtener índice siguiente (con wrap-around)
  getNextIndex(): number {
    return this.currentIndex() === this.images.length - 1 ? 0 : this.currentIndex() + 1;
  }

}
