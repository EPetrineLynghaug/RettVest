import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  rettvestProducts: Product[] = [
    {
      producer: 'RettVest',
      description: 'Griseører',
      price: 99,
      amount: '5 Stk',
    },
    {
      producer: 'RettVest',
      description: 'Griseører',
      price: 169,
      amount: '10 Stk',
    },
    {
      producer: 'RettVest',
      description: 'Kamelhud',
      price: 99,
      amount: '200 g',
    },
    {
      producer: 'RettVest',
      description: 'Kamelhud',
      price: 199,
      amount: '500 g',
    },
    {
      producer: 'RettVest',
      description: 'Okseøre med muskel',
      price: 100,
      amount: '5 Stk',
    },
    {
      producer: 'RettVest',
      description: 'Tørrfisk',
      price: 199,
      amount: '500 g',
    },
  ];

  rawforProducts: Product[] = [
    {
      producer: 'Rawfor',
      description: 'Kylling',
      price: 600,
      amount: '60 Karbonader',
    },
    {
      producer: 'Rawfor',
      description: 'Burger kylling og storfe',
      price: 600,
      amount: '60 Karbonader',
    },
    {
      producer: 'Rawfor',
      description: 'Burger kylling og svin',
      price: 600,
      amount: '60 Karbonader',
    },
    {
      producer: 'Rawfor',
      description:'Burger, lam og storfe',
      price: 700,
      amount: '60 Karbonader',
    },
    {
      producer: 'Rawfor',
      description: 'Burger vilt',
      price: 700,
      amount: '60 Karbonader',
    },
    {
      producer: 'Rawfor',
      description: 'Burger valpefor',
      price: 700,
      amount: '60 Karbonader',
    },
  ];

  polarProducts: Product[] = [
    {
      producer: 'Norwegian Polar',
      description: 'Frosset',
      price: 690,
      amount: '20 Kg',
    },
    {
      producer: 'Norwegian Polar',
      description: 'Frosset',
      price: 1360,
      amount: '40 Kg',
    },
    {
      producer: 'Norwegian Polar',
      description: 'Frosset',
      price: 2010,
      amount: '60 Kg',
    },
    {
      producer: 'Norwegian Polar',
      description: 'Frosset',
      price: 2640,
      amount: '80 Kg',
    },
    {
      producer: 'Norwegian Polar',
      description: 'Frosset',
      price: 3250,
      amount: '100 Kg',
    },
  ];

}

interface Product {
  producer: string;
  description: string;
  price: number;
  amount: string;
}
