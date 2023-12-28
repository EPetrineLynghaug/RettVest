import { Component, AfterViewInit } from '@angular/core';
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
export class ImageGalleryComponent implements AfterViewInit {

  images: Image[] = [
    {
      id: 0,
      src: '/assets/img/jpg/IMG_2582.jpg',
      alt: '',
    },
    {
      id: 1,
      src: '/assets/img/jpg/IMG_3111.jpg',
      alt: '',
    },
    {
      id: 2,
      src: '/assets/img/jpg/IMG_3267.jpg',
      alt: '',
    },
    {
      id: 3,
      src: '/assets/img/jpg/IMG_4147.jpg',
      alt: '',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    // https://splidejs.com/guides/options/
    new Splide('#mainGallery', {
      type: 'loop',
      perPage: 4,
      classes: {
        arrows: 'splide__arrows slider-arrows',
        arrow: 'splide__arrow slider-arrow',
        prev: 'splide__arrow--prev slider-arrow-prev',
        next: 'splide__arrow--next slider-arrow-next',
      },
      breakpoints: {
        1500: {
          perPage: 3,
        },
        1024: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        },
      },
    }).mount();
  }

}

interface Image {
  id: number;
  src: string;
  alt: string;
}