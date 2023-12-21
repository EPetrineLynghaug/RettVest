import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  menuOpen: boolean = false;

  // menuItems: Array<MenuItem> = [];
  menuItems: MenuItem[] = [
    {
       id: 0,
       text: "Hjemmekennel & pensjonat",
       href: "/hjemmekennel",
    },
    {
       id: 1,
       text: "Om oss",
       href: "/omoss",
    },
    {
      id: 2,
      text: "RAWFÔR",
      href: "/rawför",
    },
    {
      id: 3,
      text: "Kontakt oss",
      href: "/kontakt",
    },
  ];

  constructor() {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}

interface MenuItem {
  id: Number;
  text: String;
  href: String;
  icon?: String; // Optional
}