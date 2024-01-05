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

  constructor() {}

  ngOnInit(): void {
  }

  serviceItems: ServiceItem[] = [
    {
      id: 0,
      text: "Hjemmekennel", 
      icon: "home_and_garden", 
      description: "Stort inngjerdet område med flere soner. Løpetid er ikke et problem.",
    },
    {
      id: 0,
      text: "kurs", 
      icon: "sound_detection_dog_barking", 
      description: "Vi holder kurs, både i RettVest og for andre klubber og hundeskoler.",
    },
    {
      id: 0,
      text: "För", 
      icon: "pet_supplies", 
      description: "Både Raw og Norwegian Polar hundemat til utkjøring.",
    },

  ];

}



interface ServiceItem{
  id: number;
  text: string;
  icon: string;
  description: string;

}