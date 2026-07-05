import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ImageGalleryComponent,
    RouterModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
