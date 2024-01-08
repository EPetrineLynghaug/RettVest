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
       text: "Hjem",
       href: "/",
       icon: 'home',
    },
    {
       text: "Hjemmekennel & pensjonat",
       href: "/kennel",
       icon: 'sound_detection_dog_barking',
    },
    {
      text: "FÔR",
      href: "/produkter",
      icon: 'pet_supplies',
    },
    {
       text: "Om oss",
       href: "/om-oss",
       icon: 'contacts_product',
    },
    {
      text: "Kontakt oss",
      href: "/kontakt-oss",
      icon: 'mail',
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
  text: String;
  href: String;
  icon?: String; // Optional
}