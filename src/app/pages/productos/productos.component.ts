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

  // obtnerCategorias(): any{
  //   this.categoriaSvc.litarCategorias().subscribe(data=>{
  //     console.log(data);
  //     this.lista = data;
  //   }, error=>{
  //     console.log(error);
  //   })
  // }

  obtnerCategorias():any {
    this.categoriaSvc.litarCategorias().subscribe((respuesta)=>{
      console.log(respuesta);
      this.lista= respuesta
    })
  }

  ngOnInit(): void {
    this.obtnerCategorias();
  }
}
