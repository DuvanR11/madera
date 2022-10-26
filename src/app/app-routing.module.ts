import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { LoginComponent } from './forms/login/login.component';
import { ForoComponent } from './pages/foro/foro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
