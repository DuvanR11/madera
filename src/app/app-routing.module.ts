import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent,
    // children: [
    //   {path: 'perfiles', component: ProductosComponent},
    //   {path: 'mobiliaria', component: ProductosComponent},
    //   {path: 'parques', component: ProductosComponent},
    //   {path: 'estibas', component: ProductosComponent},
    // ]
  },
  { path: 'solicitud', component: SolicitudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
