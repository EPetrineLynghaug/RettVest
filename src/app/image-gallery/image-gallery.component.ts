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
    { src: 'IMG_2582', alt: '', },
    { src: 'IMG_3111', alt: '', },
    { src: 'IMG_3267', alt: '', },

    { src: 'IMG_4147', alt: '', },

    { src: 'IMG_4344', alt: '', },
    { src: 'IMG_4580', alt: '', },
    { src: 'IMG_4582', alt: '', },

    { src: 'IMG_4869', alt: '', },

    { src: 'IMG_4838', alt: '', },
    { src: 'IMG_6106', alt: '', },
    { src: 'IMG_4914', alt: '', },

    { src: 'IMG_5598', alt: '', },
    { src: 'IMG_5793', alt: '', },
    { src: 'IMG_6033', alt: '', },

    { src: 'IMG_6070', alt: '', },
    { src: 'IMG_6105', alt: '', },
    { src: 'IMG_4840', alt: '', },

    { src: 'IMG_6148', alt: '', },

    { src: 'IMG_6178', alt: '', },
    { src: 'IMG_6414', alt: '', },
    { src: 'IMG_6472', alt: '', },

    { src: 'IMG_6474', alt: '', },
    { src: 'IMG_6691', alt: '', },

    { src: 'IMG_7199', alt: '', },
    { src: 'IMG_8538', alt: '', },
    { src: 'IMG_4581', alt: '', },
    { src: 'IMG_7198', alt: '', },
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
  src: string;
  alt: string;
}