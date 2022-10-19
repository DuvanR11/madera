import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  dynamicSlides = [
    {
      id: 1,
      src:'https://ocoplast.com/wp-content/uploads/2022/05/Madera-plastica.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'https://ocoplast.com/wp-content/uploads/2022/05/Mobiliario-ecosotenible.png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://ocoplast.com/wp-content/uploads/2022/05/Estibas.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://ocoplast.com/wp-content/uploads/2022/05/Parques-infantiles.png',
      title:'Side 4'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    margin: 20,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

}
