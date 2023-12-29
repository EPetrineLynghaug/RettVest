import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
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
       text: "Hjem",
       href: "/",
    },
    {
       id: 1,
       text: "Hjemmekennel & pensjonat",
       href: "/kennel",
    },
    {
       id: 2,
       text: "Om oss",
       href: "/om-oss",
    },
    {
      id: 3,
      text: "RAWFÔR",
      href: "/rawfor",
    },
    {
      id: 4,
      text: "Kontakt oss",
      href: "/kontakt-oss",
    },
  ];

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    // INFO: Listen for router events and close menu if open
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      if (this.menuOpen) {
        this.menuOpen = false;
      }
    });
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