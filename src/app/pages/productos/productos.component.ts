import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  lista: any;
  productos: any;
  descripcion: any | undefined;
  constructor(private categoriaSvc: CategoriaService, private router: Router, private ProductoSvc: ProductoService) { }

  obtnerCategorias():any {
    this.categoriaSvc.litarCategorias().subscribe((respuesta)=>{
      console.log(respuesta);
      this.lista= respuesta
    })
  }

  obtnerProductos(id: any):any {
    this.ProductoSvc.filtradoProductos(id).subscribe((respuesta: any)=>{
      this.productos = respuesta
      console.log(this.productos);
    })
  }

  obtnerCategoria(id: any):any{
    this.categoriaSvc.getCategoria(id).subscribe((respuesta: any)=>{
      console.log( respuesta )
      this.descripcion = respuesta
    })
  }

  ngOnInit(): void {
    this.obtnerCategorias();
  }
}
