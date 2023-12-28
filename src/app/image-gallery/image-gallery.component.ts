import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent implements OnInit {

  images: Image[] = [
    {
      id: 0,
      src: '/assets/img/jpg/IMG_2582.jpg',
    },
    {
      id: 1,
      src: '/assets/img/jpg/IMG_3111.jpg',
    },
    {
      id: 2,
      src: '/assets/img/jpg/IMG_3267.jpg',
    },
    {
      id: 3,
      src: '/assets/img/jpg/IMG_4147.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // https://splidejs.com/guides/options/
    // new Splide('#mainGallery', {
    //   type: 'loop',
    //   perPage: 3,
    //   classes: {
    //     arrows: 'splide__arrows slider-arrows',
    //     arrow: 'splide__arrow slider-arrow',
    //     prev: 'splide__arrow--prev slider-arrow-prev',
    //     next: 'splide__arrow--next slider-arrow-next',
    //   },
    // }).mount();
  }

  // currentSlide(imageId: number): string {
  //   return `slide${imageId}`;
  // }

  // prevSlideButton(imageId: number): string {
  //   if (imageId === 0) {
  //     const id = this.images.length - 1;
  //     return `#slide${ id }`;
  //   }

  //   const id = imageId - 1;
  //   return `#slide${ id }`;
  // }

  // nextSlideButton(imageId: number): string {
  //   if (imageId === this.images.length - 1) {
  //     const id = 0;
  //     return `#slide${ id }`;
  //   }

  //   const id = imageId + 1;
  //   return `#slide${ id }`;
  // }

}

interface Image {
  id: number;
  src: string;
}