import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  test = 'Heisann!';

  constructor() {}

  ngOnInit(): void {
    this.start();
  }

  start() {
    const test = 'hadebra';
    console.log(this.test);
  }

}
