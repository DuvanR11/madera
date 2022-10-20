import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  lista: any;
  constructor(private categoriaSvc: CategoriaService) { }

  obtnerCategorias():any {
    this.categoriaSvc.litarCategorias().subscribe((respuesta)=>{
      // console.log(respuesta);
      this.lista= respuesta
    })
  }

  verProductos(): any{
    console.log("Hola")
  }

  ngOnInit(): void {
    this.obtnerCategorias();
  }
}
