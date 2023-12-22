import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent implements OnInit {

  images: Image[] = [
    {
      id: 0,
      src: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
    },
    {
      id: 1,
      src: 'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
    },
    {
      id: 2,
      src: 'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
    },
    {
      id: 3,
      src: 'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void { }

  prevSlideButton(imageId: number): string {
    if (imageId === 0) {
      const id = this.images.length - 1;
      return `#slide${ id }`;
    }

    const id = imageId - 1;
    return `#slide${ id }`;
  }

  currentSlide(imageId: number): string {
    return `slide${imageId}`;
  }

  nextSlideButton(imageId: number): string {
    if (imageId === this.images.length - 1) {
      const id = 0;
      return `#slide${ id }`;
    }

    const id = imageId + 1;
    return `#slide${ id }`;
  }

}

interface Image {
  id: number;
  src: string;
}