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

  serviceItems: ServiceItem[] = [
    {
      text: "Hjemmekennel",
      icon: "home_and_garden",
      description: "Stort inngjerdet område med flere soner. Løpetid er ikke et problem.",
      href: '/kennel',
    },
    {
      text: "För",
      icon: "pet_supplies",
      description: "Norwegian Polar hundemat til utkjøring.",
      href: '/produkter',
    },
    {
      text: "Om oss",
      icon: "contacts_product",
      description: "Både Hilde og Karstein har erfaring med ulike raser og er utdannede hundeinstruktører",
      href: '/om-oss',
    },
  ];

}



interface ServiceItem {
  text: string;
  icon: string;
  description: string;
  href: string;
}
