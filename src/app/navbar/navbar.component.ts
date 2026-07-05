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
       text: "Kennel",
       href: "/kennel",
       icon: 'sound_detection_dog_barking',
    },
    {
       text: "Omplassering",
       href: "/omplassering-av-hund",
       icon: 'favorite',
    },
    {
       text: "Om oss",
       href: "/om-oss",
       icon: 'groups',
    },
    {
      text: "Kontakt",
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
  text: string;
  href: string;
  icon?: string;
}
