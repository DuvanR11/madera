import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.scss']
})
export class CardProductosComponent implements OnInit {

  lista: any;
  seleccionados: any = [];
  hola: any;
  constructor(private ProductoSvc: ProductoService) { }

  recibirProductos(id: number): any{
    this.ProductoSvc.litarProductos().subscribe((respuesta)=>{
      // console.log(respuesta[1].idCategoria);
      this.lista= respuesta;

      this.lista.forEach((element: any) => {
        // console.log(element.idCategoria);
        if (element.idCategoria == id){
          console.log('si')
          this.seleccionados += element;
          // console.log(this.seleccionados)
        }else{
          console.log('no')
        }
      });
  })
}

  ngOnInit(): void {
    this.recibirProductos(1)
  }

}
