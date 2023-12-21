import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
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
      icon: "house", 
      description: "hei",
    },
    {
      id: 0,
      text: "Hjemmekennel", 
      icon: "house", 
      description: "hei",
    },
    {
      id: 0,
      text: "Hjemmekennel", 
      icon: "house", 
      description: "hei",
    },

  ];

}



interface ServiceItem{
  id: Number;
  text: String;
  icon: String;
  description: string;

}