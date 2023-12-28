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
    { id: 0, src: 'IMG_2582', alt: '', },
    { id: 1, src: 'IMG_3111', alt: '', },
    { id: 2, src: 'IMG_3267', alt: '', },
    { id: 3, src: 'IMG_4147', alt: '', },
    { id: 4, src: 'IMG_4344', alt: '', },
    { id: 5, src: 'IMG_4580', alt: '', },
    { id: 6, src: 'IMG_4581', alt: '', },
    { id: 7, src: 'IMG_4582', alt: '', },
    { id: 8, src: 'IMG_4838', alt: '', },
    { id: 9, src: 'IMG_4840', alt: '', },
    { id: 10, src: 'IMG_4869', alt: '', },
    { id: 11, src: 'IMG_2582', alt: '', },
    { id: 12, src: 'IMG_3111', alt: '', },
    { id: 13, src: 'IMG_3267', alt: '', },
    { id: 14, src: 'IMG_4147', alt: '', },
    { id: 15, src: 'IMG_4344', alt: '', },
    { id: 16, src: 'IMG_4580', alt: '', },
    { id: 17, src: 'IMG_4581', alt: '', },
    { id: 18, src: 'IMG_4582', alt: '', },
    { id: 19, src: 'IMG_4838', alt: '', },
    { id: 20, src: 'IMG_4840', alt: '', },
    { id: 21, src: 'IMG_4869', alt: '', },
    { id: 22, src: 'IMG_4914', alt: '', },
    { id: 23, src: 'IMG_4941', alt: '', },
    { id: 24, src: 'IMG_5598', alt: '', },
    { id: 25, src: 'IMG_5793', alt: '', },
    { id: 26, src: 'IMG_6033', alt: '', },
    { id: 27, src: 'IMG_6070', alt: '', },
    { id: 28, src: 'IMG_6105', alt: '', },
    { id: 29, src: 'IMG_6106', alt: '', },
    { id: 30, src: 'IMG_6148', alt: '', },
    { id: 31, src: 'IMG_6178', alt: '', },
    { id: 32, src: 'IMG_6414', alt: '', },
    { id: 33, src: 'IMG_6472', alt: '', },
    { id: 34, src: 'IMG_6474', alt: '', },
    { id: 35, src: 'IMG_6589', alt: '', },
    { id: 36, src: 'IMG_6689', alt: '', },
    { id: 37, src: 'IMG_6690', alt: '', },
    { id: 38, src: 'IMG_6691', alt: '', },
    { id: 39, src: 'IMG_6692', alt: '', },
    { id: 40, src: 'IMG_6693', alt: '', },
    { id: 41, src: 'IMG_6694', alt: '', },
    { id: 42, src: 'IMG_7198', alt: '', },
    { id: 43, src: 'IMG_7199', alt: '', },
    { id: 44, src: 'IMG_8538', alt: '', },
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